from flask import Flask, jsonify, request, session
from flask_cors import CORS, cross_origin
from flask_session import Session
import os
from lib.database_connection import get_flask_database_connection
from lib.staff_repository import *
from lib.user_repository import *
from functools import wraps
from dotenv import load_dotenv, dotenv_values 
import bcrypt
load_dotenv()

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:5173", "supports_credentials": True}})
app.config['SECRET_KEY'] = os.getenv("SESSION_KEY") 
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user' not in session:
            return redirect('/login')
        return f(*args, **kwargs)
    return decorated_function

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
    response_data = {key: value for key, value in result.items() if key != 'password'}
    return jsonify(response_data), 201

@app.route('/login', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def login():
    connection = get_flask_database_connection(app)
    user_repository = UserRepository(connection)
    data = request.json
    username = data.get('username')
    password = data.get('password')
    # Retrieve user from database by username
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

if __name__ == "__main__":
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))