from flask import Flask, jsonify
from flask_cors import CORS
import os
from lib.database_connection import get_flask_database_connection
from lib.staff_repository import *

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:5173", "supports_credentials": True}})

@app.route('/team', methods=['GET'])
def all_staff():
    connection = get_flask_database_connection(app)
    staff_repository = StaffRepository(connection)
    staff = staff_repository.all_staff()
    return jsonify(staff)

if __name__ == "__main__":
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))