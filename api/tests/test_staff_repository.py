from lib.staff_repository import StaffRepository


def test_all(db_connection):
    db_connection.seed("seeds/bookclub.sql")
    repository = StaffRepository(db_connection)
    assert repository.all_staff() == [
        {'id': 1, 'name': 'Gill', 'image': 'Gill.webp', 'title': 'Administration Lead',
            'qualifications': ['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2']},
        {'id': 2, 'name': 'Holly', 'image': 'Holly.webp', 'title': 'Deputy Manager', 'qualifications': [
            'Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2']},
        {'id': 3, 'name': 'Megan', 'image': 'Megan.webp', 'title': 'Room Lead', 'qualifications': [
            'Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2']}
    ]
