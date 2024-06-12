from flask import Flask, jsonify, request, session
from flask_cors import CORS, cross_origin
from flask_session import Session
import os
from lib.database_connection import get_flask_database_connection
from lib.staff_repository import *
from lib.user_repository import *
from functools import wraps
from dotenv import load_dotenv
import bcrypt
from werkzeug.utils import secure_filename
load_dotenv()

app = Flask(__name__)
cors = CORS(app, resources={
            r"/*": {"origins": "http://localhost:5173", "supports_credentials": True}})
app.config['SECRET_KEY'] = os.getenv("SESSION_KEY")
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

# File upload setup

UPLOAD_FOLDER = '/Users/courtneysuhr/developer/projects/MontessoriMindsV2/frontend/src/assets/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
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
            print(f"An error occurred: {str(e)}")
            return jsonify({'message': "An error occurred: 400 Bad Request"})
        except FileNotFoundError as e:
            # Handle FileNotFoundError (404 Not Found)
            print(f"An error occurred: {str(e)}")
            return jsonify({'message': "An error occurred: 404 Not Found"})
        except Exception as e:
            # Handle other exceptions (500 Internal Server Error)
            print(f"An error occurred: {str(e)}")
            return jsonify({'message': "An error occurred: 500 Internal Server Error"})
    return wrapper

# ROUTES


@app.route('/team', methods=['GET'])
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
    if user['id'] <= 3:
        # For test users (IDs 1-3), compare passwords directly
        password_bytes = password.encode('utf-8')
        if user and password_bytes == user['password']:
            session['user'] = user['username']
            # Return user information - removing password information
            return jsonify({key: value for key, value in user.items() if key != 'password'}), 200
        else:
            return jsonify({'message': 'Username or Password Incorrect'}), 401
    else:
        # For other users, use bcrypt checkpassword function for secure password comparison
        if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
            session['user'] = user['username']
            # Return user information - removing password information
            return jsonify({key: value for key, value in user.items() if key != 'password'}), 200
        else:
            return jsonify({'message': 'Username or Password Incorrect'}), 401


@app.route('/logout', methods=['PUT'])
@cross_origin(supports_credentials=True)
def logout():
    connection = get_flask_database_connection(app)
    user_repository = UserRepository(connection)
    username = session.get('user')
    print(username)
    session.pop('user', None)
    print(session)
    return jsonify({'message': 'You have successfully logged out'})


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
@login_required
@error_handler_decorator
def create_staff():
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)

    file = request.files['file']
    if 'file' not in request.files:
        return jsonify({'message': "No file part"}), 400
    if file.filename == '':
        return jsonify({'message': "No file selected for uploading"})
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        name = request.form.get('name')
        title = request.form.get('title')
        qualifications = request.form.get('qualifications')
        awards = request.form.get('awards')

        if not all([name, filename, title, qualifications, awards]):
            return jsonify({'message': "Missing form data"}), 400

    staff = Staff(None, name, filename, title, qualifications, awards)
    staff_repository.create(staff)
    return jsonify({'message': 'You have successfully added a new staff member'}), 200

@app.route('/delete/staff', methods=['POST'])
@login_required
@error_handler_decorator
def delete_staff():
    data = request.json  
    staff_name = data.get('staff_name')
    
    if not staff_name:
        return jsonify({'error': 'Staff name is required'}), 400
    
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)
    staff_repository.delete(staff_name)
    staff = staff_repository.all_staff()
    return jsonify({'message': f'You have successfully deleted {staff_name}'}, staff), 200

@app.route('/update/<staff_id>', methods=['GET', 'POST'])
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
    return jsonify({'message': f'You have successfully updated staff member'}, staff_all), 200


if __name__ == "__main__":
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))
