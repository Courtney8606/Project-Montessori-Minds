from flask import Flask, jsonify, request, session, send_from_directory, make_response, url_for
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
from PIL import Image
import io

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

load_dotenv()

def get_frontend_url():
    if os.getenv('APP_ENV') == 'production':
        return "https://project-montessori-minds.onrender.com"
    else:
        return "http://localhost:5173"

def get_backend_url():
    if os.getenv('APP_ENV') == 'production':
        return "https://montessori-minds-backend.onrender.com"
    else:
        return "http://localhost:5001"

app = Flask(__name__)

frontend_url = get_frontend_url()
if frontend_url is not None:
    cors = CORS(app, resources={r"/*": {"origins": frontend_url, "supports_credentials": True}})
else:
    cors = CORS(app)


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

# File upload setup

session_file_dir = os.path.join(os.getcwd(), 'flask_session')
app.config['SESSION_FILE_DIR'] = session_file_dir

if not os.path.exists(session_file_dir):
    os.makedirs(session_file_dir)

Session(app)

current_script_directory = os.path.dirname(__file__)
logging.debug(f"Current script directory: {current_script_directory}")

UPLOAD_FOLDER_DEV = os.getenv('UPLOAD_FOLDER_DEV', 'uploads')
if UPLOAD_FOLDER_DEV:
    UPLOAD_FOLDER_DEV = os.path.abspath(os.path.join(current_script_directory, UPLOAD_FOLDER_DEV))
    logging.debug(f"Resolved UPLOAD_FOLDER_DEV: {UPLOAD_FOLDER_DEV}")

UPLOAD_FOLDER_PROD = os.getenv('UPLOAD_FOLDER_PROD', '/uploads')
if UPLOAD_FOLDER_PROD:
    # UPLOAD_FOLDER_PROD = os.path.abspath(os.path.join(current_script_directory, UPLOAD_FOLDER_PROD))
    logging.debug(f"Resolved UPLOAD_FOLDER_PROD: {UPLOAD_FOLDER_PROD}")

UPLOAD_FOLDER = UPLOAD_FOLDER_DEV if os.getenv('APP_ENV') == 'development' else UPLOAD_FOLDER_PROD
logging.debug(f"Resolved UPLOAD_FOLDER: {UPLOAD_FOLDER}")

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Decorator functions

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

@app.route('/uploads/<path:filename>', methods=['GET'])
@cross_origin(supports_credentials=True)
def uploaded_file(filename):
    print("RETURN SINGLE IMAGE UPLOAD FOLDER", UPLOAD_FOLDER)
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/uploads/batch', methods=['POST'])
@cross_origin(supports_credentials=True)
def batch_uploads():
    filenames = request.json.get('filenames', [])
    print("BATCH UPLOAD FOLDER", UPLOAD_FOLDER)
    file_paths = [os.path.join(app.config['UPLOAD_FOLDER'], filename) for filename in filenames]

    if not filenames:
        return jsonify({'error': 'No filenames provided'}), 400

    images = []
    for file_path in file_paths:
        if os.path.exists(file_path):
            base_url = get_backend_url()
            images.append({
                'filename': os.path.basename(file_path),
                'url': f"{base_url}/uploads/{os.path.basename(file_path)}"
            })

    if not images:
        return jsonify({'error': 'No images found'}), 404

    return jsonify(images)
    
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
        logging.error("You have not uploaded an image")
        return jsonify({'message': "You have not uploaded an image"}), 400

    file = request.files['file']

    if file.filename == '':
        logging.error("No file selected for uploading")
        return jsonify({'message': "No file selected for uploading"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        webp_filename = os.path.splitext(filename)[0] + '.webp'
        webp_file_path = os.path.join(app.config['UPLOAD_FOLDER'], webp_filename)

        try:
            # Save the uploaded file temporarily
            print("FILE", file)
            file.save(file_path)
            
            # Convert the image to WebP format
            image = Image.open(file_path)
            image.save(webp_file_path, format='webp', quality=100)
            logging.debug("Image converted to WebP successfully at: " + webp_file_path)

            # Remove the original file if not needed
            os.remove(file_path)
            logging.debug("Original file removed: " + file_path)

            # Save the WebP file path in the database
            name = request.form.get('name')
            title = request.form.get('title')
            qualifications = request.form.get('qualifications')
            awards = request.form.get('awards') or ""

            logging.debug(f"name: {name}, title: {title}, qualifications: {qualifications}, awards: {awards}")

            def is_valid_qualifications(qualifications):
            # Check if qualifications is a non-empty string and does not just contain "{}" or only spaces
                return (
                    qualifications 
                    and qualifications.strip() 
                    and qualifications.strip() != "{}" 
                    and qualifications.strip() != "{,}"
                )

            # Check that all mandatory fields are provided and not empty (strip spaces)
            if not all([
                name and name.strip(),
                webp_filename and webp_filename.strip(),
                title and title.strip(),
                is_valid_qualifications(qualifications)
            ]):
                logging.error("Missing or empty mandatory form data")
                return jsonify({'message': "Missing or empty mandatory form data"}), 400
            
            # # Check that all mandatory fields are provided and not empty (strip spaces)
            # if not all(field and field.strip() for field in [name, webp_filename, title, qualifications]):
            #     logging.error("Missing or empty mandatory form data")
            #     return jsonify({'message': "Missing or empty mandatory form data"}), 400

            staff = Staff(None, name, webp_filename, title, qualifications, awards)
            staff_repository.create(staff)
            logging.debug("Staff member created successfully")
            return jsonify({'message': 'You have successfully added a new staff member'}), 200

        except Exception as e:
            logging.error(f"Error processing file: {str(e)}")
            return jsonify({'message': "Error processing file"}), 500

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
def update_staff(staff_id):
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)
    try:
        if 'file' not in request.files:
            return jsonify({'message': "You have not attached an image"}), 400
        
        file = request.files['file']

        if file.filename == '':
            return jsonify({'message': "No file selected for uploading"}), 400
        if not allowed_file(file.filename):
            return jsonify({'message': "File type not allowed"}), 400
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            webp_filename = os.path.splitext(filename)[0] + '.webp'
            webp_file_path = os.path.join(app.config['UPLOAD_FOLDER'], webp_filename)

            try:
                # Save the uploaded file temporarily
                file.save(file_path)
                
                # Convert the image to WebP format
                image = Image.open(file_path)
                image.save(webp_file_path, format='webp', quality=100)

                # Remove the original file if not needed
                os.remove(file_path)
            
            except Exception as image_processing_error:
                    logging.error(f"Image processing error: {str(image_processing_error)}")
                    return jsonify({'message': "Error processing the image file"}), 500

                # Save the WebP file path in the database
            name = request.form.get('name')
            title = request.form.get('title')
            qualifications = request.form.get('qualifications')
            awards = request.form.get('awards') or ""

            logging.debug(f"name: {name}, title: {title}, qualifications: {qualifications}, awards: {awards}")

            def is_valid_qualifications(qualifications):
            # Check if qualifications is a non-empty string and does not just contain "{}" or only spaces
                return (
                    qualifications 
                    and qualifications.strip() 
                    and qualifications.strip() != "{}" 
                    and qualifications.strip() != "{,}"
                )

            # Check that all mandatory fields are provided and not empty (strip spaces)
            if not all([
                name and name.strip(),
                webp_filename and webp_filename.strip(),
                title and title.strip(),
                is_valid_qualifications(qualifications)
            ]):
                logging.error("Missing or empty mandatory form data")
                return jsonify({'message': "Missing or empty mandatory form data"}), 400

            # # Check that all mandatory fields are provided and not empty (strip spaces)
            # if not all(field and field.strip() for field in [name, webp_filename, title, qualifications]):
            #     logging.error("Missing or empty mandatory form data")
            #     return jsonify({'message': "Missing or empty mandatory form data"}), 400

            try:
                staff = Staff(staff_id, name, webp_filename, title, qualifications, awards)
                staff_repository.update(staff)
                logging.debug("Staff member created successfully")
                staff_all = staff_repository.all_staff()
                return jsonify({'message': f'You have successfully updated staff member'}, staff_all), 200

            except Exception as e:
                logging.error(f"Database error: {str(e)}")
                return jsonify({'message': "Error updating staff member in the database"}), 500

    except Exception as e:
        print("GOING STRAIGHT TO ERROR")
        logging.error(f"Unexpected error: {str(e)}")
        return jsonify({'message': "An unexpected error occurred. Please try again later."}), 500

if __name__ == "__main__":
    seed_database()
    port = int(os.environ.get('PORT', 5001))  
    app.run(debug=True, host='0.0.0.0', port=port)
