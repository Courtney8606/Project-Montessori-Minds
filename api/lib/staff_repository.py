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

    def find_username(self, name):
        rows = self._connection.execute(
            "SELECT * FROM staff WHERE name = %s", [name])
        if not rows:
            return None
        row = rows[0]
        return row

    def create(self, staff):
        self._connection.execute('INSERT INTO staff (name, image, title, qualifications, awards) VALUES (%s, %s, %s, %s, %s)', [
                                 staff.name, staff.image, staff.title, staff.qualifications, staff.awards])
        return None

    def delete(self, name):
        self._connection.execute('DELETE FROM staff WHERE name = %s', [name])
        return None

    def update(self, staff):
        self._connection.execute('UPDATE staff SET name = %s, image = %s, title = %s, qualifications = %s, awards = %s WHERE id = %s', [
                                 staff.name, staff.image, staff.title, staff.qualifications, staff.awards, staff.id])
