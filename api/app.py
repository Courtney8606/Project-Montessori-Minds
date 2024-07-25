from flask import Flask, jsonify, request, session, send_from_directory, make_response
from flask_cors import CORS, cross_origin
from flask_session import Session
import os
from lib.database_connection import get_flask_database_connection, DatabaseConnection
from lib.staff_repository import *
from lib.user_repository import *
from functools import wraps
from dotenv import load_dotenv
import bcrypt
from werkzeug.utils import secure_filename
import logging
import requests

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

load_dotenv()

def get_frontend_url():
    if os.getenv('APP_ENV') == 'production':
        return "https://project-montessori-minds.onrender.com/"
    else:
        return "http://localhost:5173"

# Set CORS based on the frontend URL

app = Flask(__name__)

frontend_url = get_frontend_url()
if frontend_url:
    cors = CORS(app, resources={r"/uploads/*": {"origins": frontend_url, "supports_credentials": True}})
else:
    cors = CORS(app, resources={r"/uploads/*": {"origins": "*", "supports_credentials": True}})

test_frontend_url = "https://project-montessori-minds.onrender.com"
# cors = CORS(app, resources={
#             r"/*": {"origins": get_frontend_url(), "supports_credentials": True}})
app.config['SECRET_KEY'] = os.getenv("SESSION_KEY")
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_PERMANENT'] = False 
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_FILE_DIR'] = os.path.join(os.getcwd(), 'flask_session')
app.config['SESSION_FILE_THRESHOLD'] = 500

app.config.update(
    SESSION_COOKIE_SECURE=True, 
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE='None'
)

session_file_dir = os.path.join(os.getcwd(), 'flask_session')
app.config['SESSION_FILE_DIR'] = session_file_dir

if not os.path.exists(session_file_dir):
    os.makedirs(session_file_dir)

Session(app)

# File upload setup

current_script_directory = os.path.dirname(__file__)
logging.debug(f"Current script directory: {current_script_directory}")

UPLOAD_FOLDER_DEV = os.getenv('UPLOAD_FOLDER_DEV')
if UPLOAD_FOLDER_DEV:
    UPLOAD_FOLDER_DEV = os.path.abspath(os.path.join(current_script_directory, UPLOAD_FOLDER_DEV))
    logging.debug(f"Resolved UPLOAD_FOLDER_DEV: {UPLOAD_FOLDER_DEV}")

UPLOAD_FOLDER_PROD = os.getenv('UPLOAD_FOLDER_PROD')
if UPLOAD_FOLDER_PROD:
    UPLOAD_FOLDER_PROD = os.path.abspath(os.path.join(current_script_directory, UPLOAD_FOLDER_PROD))
    logging.debug(f"Resolved UPLOAD_FOLDER_PROD: {UPLOAD_FOLDER_PROD}")

UPLOAD_FOLDER = UPLOAD_FOLDER_DEV if os.getenv('APP_ENV') == 'development' else UPLOAD_FOLDER_PROD
logging.debug(f"Resolved UPLOAD_FOLDER: {UPLOAD_FOLDER}")

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print("session decorator function", session.get('user'))
        if 'user' not in session:
            return jsonify({'message': 'You are not authorised to access this content'})
        return f(*args, **kwargs)
    return decorated_function


def error_handler_decorator(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except ValueError as e:
            # Handle ValueError (400 Bad Request)
            logger.error(f"ValueError: {str(e)}")
            return jsonify({'message': f"An error occurred: 400 Bad Request - {str(e)}"}), 400
        except FileNotFoundError as e:
            # Handle FileNotFoundError (404 Not Found)
            logger.error(f"FileNotFoundError: {str(e)}")
            return jsonify({'message': f"An error occurred: 404 Not Found - {str(e)}"}), 404
        except Exception as e:
            # Handle other exceptions (500 Internal Server Error)
            logger.error(f"Exception: {str(e)}")
            return jsonify({'message': f"An error occurred: 500 Internal Server Error - {str(e)}"}), 500
    return wrapper

# deploy_hook_url = os.getenv("DEPLOY_HOOK_URL")

# def trigger_rebuild(deploy_hook_url):
#     try:
#         response = requests.post(deploy_hook_url)
#         if response.status_code == 200:
#             logging.info("Build triggered successfully")
#         else:
#             logging.error(f"Failed to trigger build: {response.status_code}")
#     except Exception as e:
#         logging.error(f"An error occurred while triggering build: {e}")

# Seed database on initialisation

def seed_database():
    database_connection = DatabaseConnection()
    try:
        database_connection.connect()
        database_connection.seed('seeds/montessori_data.sql') 
        print("Database seeded succesfully")
    except Exception as e:
        print(f"Database seeding error {e}")
        return jsonify({'message': f'Error seeding database: {str(e)}'}), 500
    
# ROUTES

# @app.route('/uploads/<path:filename>', methods=['GET'])
# def uploaded_file(filename):
#     print('UPLOAD FILENAME TEST', filename)
#     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/uploads/<path:filename>', methods=['OPTIONS', 'GET'])
def uploaded_file(filename):
    if request.method == 'OPTIONS':
        # Handle CORS preflight OPTIONS request
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', test_frontend_url)
        response.headers.add('Access-Control-Allow-Methods', 'GET, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    else:
        # Handle actual GET request for the file
        response = send_from_directory(app.config['UPLOAD_FOLDER'], filename)
        response.headers.add('Access-Control-Allow-Origin', test_frontend_url)
        response.headers.add('Access-Control-Allow-Methods', 'GET')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
@app.route('/team', methods=['GET'])
@cross_origin(supports_credentials=True)
def all_staff():
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)
    staff = staff_repository.all_staff()
    return jsonify(staff)


@app.route('/signup', methods=['POST'])
@cross_origin(supports_credentials=True)
def post_user():
    connection = get_flask_database_connection(app)
    user_repository = UserRepository(connection)
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    # take plain text password and hash using bcrypt and a randomly generated salt
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user = User(None, username, email, hashed_password)
    user_repository.create(user)
    result = user_repository.find_all()[-1]
    response_data = {key: value for key,
                     value in result.items() if key != 'password'}
    return jsonify(response_data), 201


@app.route('/login', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def login():
    connection = get_flask_database_connection(app)
    user_repository = UserRepository(connection)
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user = user_repository.find_username(username)
    print(user)
    # Check if user exists and password is correct
    if user['id'] == 1:
        # For test users (ID 1), compare passwords directly
        password_bytes = password.encode('utf-8')
        if user and password_bytes == user['password']:
            session['user'] = user['username']
            print("login pre check", session.get('user'))

            response_data = {key: value for key, value in user.items() if key != 'password'}
            response_data['session_user'] = session.get('user')
            return jsonify(response_data), 200
        else:
            return jsonify({'message': 'Username or Password Incorrect'}), 401
    else:
        # For other users, use bcrypt checkpassword function for secure password comparison
        if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
            session['user'] = user['username']
            print("login pre check", session.get('user'))
            response_data = {key: value for key, value in user.items() if key != 'password'}
            response_data['session_user'] = session.get('user')
            return jsonify(response_data), 200
        else:
            return jsonify({'message': 'Username or Password Incorrect'}), 401


@app.route('/logout', methods=['PUT'])
@cross_origin(supports_credentials=True)
def logout():
    connection = get_flask_database_connection(app)
    user_repository = UserRepository(connection)
    username = session.get('user')
    session.pop('user', None)
    username_after_logout = session.get('user')
    if username is not None and username_after_logout is None:
        message = f'You have successfully logged out, there is no username in session.'
    else:
        message = f'You have not successfully logged out, username after logout is {username_after_logout}'
    return jsonify({'message': message}), 200  


@app.route('/check-username', methods=['POST'])
@cross_origin(supports_credentials=True)
def check_username_availability():
    username = request.json.get('username')
    connection = get_flask_database_connection(app)
    users_repository = UserRepository(connection)
    user_exists = bool(users_repository.find_username(username))
    print('hello')
    return jsonify({'available': not user_exists})


@app.route('/check-email', methods=['POST'])
@cross_origin(supports_credentials=True)
def check_email_availability():
    email = request.json.get('email')
    connection = get_flask_database_connection(app)
    users_repository = UserRepository(connection)
    email_exists = bool(users_repository.find_email(email))
    return jsonify({'available': not email_exists})


@app.route('/staffmember/new', methods=['POST'])
@cross_origin(supports_credentials=True)
@login_required
def create_staff():
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)

    if 'file' not in request.files:
        logging.error("No file part in the request")
        return jsonify({'message': "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        logging.error("No file selected for uploading")
        return jsonify({'message': "No file selected for uploading"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        logging.debug(f"Filename", filename)
        logging.debug(f"app config UPLOAD FOLDER", app.config['UPLOAD_FOLDER'])
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        logging.debug(f"File path: {file_path}")

        try:
            file.save(file_path)
            logging.debug("File saved successfully")

            name = request.form.get('name')
            title = request.form.get('title')
            qualifications = request.form.get('qualifications')
            awards = request.form.get('awards')

            if not all([name, filename, title, qualifications, awards]):
                logging.error("Missing form data")
                return jsonify({'message': "Missing form data"}), 400

            staff = Staff(None, name, filename, title, qualifications, awards)
            staff_repository.create(staff)
            logging.debug("Staff member created successfully")
            # trigger_rebuild(deploy_hook_url)
            return jsonify({'message': 'You have successfully added a new staff member'}), 200

        except Exception as e:
            logging.error(f"Error saving file: {str(e)}")
            return jsonify({'message': "Error saving file"}), 500

    else:
        logging.error("File type not allowed")
        return jsonify({'message': "File type not allowed"}), 400

@app.route('/delete/staff', methods=['POST'])
@cross_origin(supports_credentials=True)
@login_required
@error_handler_decorator
def delete_staff():
    data = request.json  
    staff_name = data.get('staff_name')
    session_user = session.get('user')
    print("session user delete", session.get('user'))
    
    if not staff_name:
        return jsonify({'error': 'Staff name is required'}), 400
    
    if session_user is None:
        return jsonify({'error': 'No session username found'}), 400
    
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)
    staff_repository.delete(staff_name)
    staff = staff_repository.all_staff()
    return jsonify({'message': f'You have successfully deleted {staff_name}'}, staff), 200

@app.route('/update/<staff_id>', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
@login_required
@error_handler_decorator
def update_staff(staff_id):
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)

    file = request.files['file']
    if 'file' not in request.files:
        return jsonify({'message': "No file part"}), 400
    if file.filename == '':
        return jsonify({'message': "No file selected for uploading"}), 400
    if not allowed_file(file.filename):
        return jsonify({'message': "File type not allowed"}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        name = request.form.get('name')
        title = request.form.get('title')
        qualifications = request.form.get('qualifications')
        awards = request.form.get('awards')

        if not all([name, filename, title, qualifications, awards]):
            return jsonify({'message': "Missing form data"}), 400

    staff = Staff(staff_id, name, filename, title, qualifications, awards)
    staff_repository.update(staff)
    staff_all = staff_repository.all_staff()
    # trigger_rebuild(deploy_hook_url)
    return jsonify({'message': f'You have successfully updated staff member'}, staff_all), 200


# if __name__ == "__main__":
#     app.run(debug=True, port=int(os.environ.get('PORT', 5001)))

if __name__ == "__main__":
    seed_database()
    port = int(os.environ.get('PORT', 5001))  # Default to port 5000 if PORT environment variable is not set
    app.run(debug=True, host='0.0.0.0', port=port)
