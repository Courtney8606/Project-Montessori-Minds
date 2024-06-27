from lib.user import *


class UserRepository:

    def __init__(self, connection):
        self._connection = connection

    def find_all(self):
        rows = self._connection.execute("SELECT * FROM users")
        users = []
        for row in rows:
            users.append(row)
        return users

    def find_username(self, username):
        rows = self._connection.execute(
            "SELECT * FROM users WHERE username = %s", [username])
        if not rows:
            return None
        row = rows[0]
        return row

    def find_email(self, email):
        rows = self._connection.execute(
            "SELECT * FROM users WHERE email = %s", [email])
        if not rows:
            return None
        row = rows[0]
        return row

    def create(self, user):
        self._connection.execute('INSERT INTO users (username, email, password) VALUES (%s,%s,%s)',
            [user.username,
            user.email,
            user.password,
            ])
