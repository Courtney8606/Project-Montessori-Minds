from lib.staff import *

class StaffRepository:

    def __init__(self, connection):
        self._connection = connection
    
    def all_staff(self):
        rows = self._connection.execute("SELECT * FROM staff")
        staff = []
        for row in rows:
            staff.append(row)
        return staff

    # def find_id(self, id):
    #     row = self._connection.execute("SELECT * FROM users WHERE id = %s", [id])[0]
    #     return row
    
    # # def find_username(self, username):
    # #     row = self._connection.execute("SELECT * FROM users WHERE username = %s", [username])[0]
    # #     return row

    # def find_username(self, username):
    #     rows = self._connection.execute("SELECT * FROM users WHERE username = %s", [username])
    #     if not rows:
    #         return None  # Return None or raise an exception to indicate that the user wasn't found
    #     row = rows[0]
    #     return row
    
    # def find_email(self, email):
    #     rows = self._connection.execute("SELECT * FROM users WHERE email = %s", [email])
    #     if not rows:
    #         return None  # Return None or raise an exception to indicate that the user wasn't found
    #     row = rows[0]
    #     return row
    
    # def create(self, user):
    #     self._connection.execute('INSERT INTO users (username, email, role, password) VALUES (%s,%s,%s,%s)', 
    #         [   user.username,
    #             user.email,
    #             user.role,
    #             user.password,
    #         ])

    # def update_role(self, role, username):
    #     self._connection.execute('UPDATE users SET role = %s WHERE username = %s', [role, username])
    #     row = self._connection.execute("SELECT * FROM users WHERE username = %s", [username])
    #     return row
    
    # def update_child_name(self, name, username):
    #     self._connection.execute('UPDATE users SET child = %s WHERE username = %s', [name, username])
    #     row = self._connection.execute("SELECT * FROM users WHERE username = %s", [username])
    #     return row