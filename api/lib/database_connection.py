import os
import psycopg
from flask import g
from psycopg.rows import dict_row


class DatabaseConnection:
    # DEV_DATABASE_NAME = "montessoriminds"
    # TEST_DATABASE_NAME = "test_montessoriminds"

    def __init__(self, test_mode=False):
        self.test_mode = test_mode
        self.connection = None 
        # New line above

    # This method connects to PostgreSQL using the psycopg library. We connect
    # to localhost and select the database name given in argument.
    def connect(self):
        database_url = self._database_url()
        print(f"DATABASE_URL: {database_url}")
        try:
            self.connection = psycopg.connect(
                database_url,
                row_factory=dict_row)
            print("Database connection successful")
        except psycopg.OperationalError as e:
            print(f"Error connecting to database: {e}")
            raise Exception(f"Couldn't connect to the database at {database_url}!")
        

    # This method seeds the database with the given SQL file.
    # We use it to set up our database ready for our tests or application.
    def seed(self, sql_filename):
        self._check_connection()
        if not os.path.exists(sql_filename):
            raise Exception(f"File {sql_filename} does not exist")
        with self.connection.cursor() as cursor:
            cursor.execute(open(sql_filename, "r").read())
            self.connection.commit()

    # This method executes an SQL query on the database.
    def execute(self, query, params=[]):
        self._check_connection()
        with self.connection.cursor() as cursor:
            cursor.execute(query, params)
            if cursor.description is not None:
                result = cursor.fetchall()
            else:
                result = None
            self.connection.commit()
            return result

    CONNECTION_MESSAGE = '' \
        'DatabaseConnection.exec_params: Cannot run a SQL query as ' \
        'the connection to the database was never opened. Did you ' \
        'make sure to call first the method DatabaseConnection.connect` ' \
        'in your app.py file (or in your tests)?'

    # This private method checks that we're connected to the database.
    def _check_connection(self):
        if self.connection is None:
            raise Exception(self.CONNECTION_MESSAGE)

    # This private method returns the name of the database we should use.
    # def _database_name(self):
    #     if self.test_mode:
    #         return self.TEST_DATABASE_NAME
    #     else:
    #         return self.DEV_DATABASE_NAME
    
    def _database_url(self):
        if self.test_mode:
            url = os.getenv('TEST_DATABASE_URL')
            print(f"Using test database URL: {url}")
            return url
        elif os.getenv('APP_ENV') == 'production':
            url = os.getenv('DATABASE_URL')
            print(f"Using production database URL: {url}")
            return url
        else:
            url = os.getenv('DEV_DATABASE_URL')
            print(f"Using development database URL: {url}")
            return url
    
# This function integrates with Flask to create one database connection that
# Flask request can use.


def get_flask_database_connection(app):
    if not hasattr(g, 'flask_database_connection'):
        g.flask_database_connection = DatabaseConnection(
            test_mode=os.getenv('APP_ENV') == 'test')
        g.flask_database_connection.connect()
    return g.flask_database_connection
