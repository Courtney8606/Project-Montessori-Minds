from lib.staff_repository import StaffRepository
from lib.staff import Staff


def test_all(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = StaffRepository(db_connection)
    assert repository.all_staff()[0:3] == [
        {'id': 1, 'name': 'Gill', 'image': 'Gill2.png', 'title': 'Admin & Nutrition Lead',
            'qualifications': ['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], 'awards': []},
        {'id': 2, 'name': 'Holly', 'image': 'Holly2.png', 'title': 'Deputy Manager', 'qualifications': ['International Diploma in Montessori Pedagogy', 'Level 5 Early Years Practitioner'], 'awards': ['Deputy Manager of the Year Award NMT 2023', 'Early Years Teacher of the Year Award AC 2023']},
        {'id': 3, 'name': 'Lucy', 'image': 'Lucy2.png', 'title': 'Pedagogy Lead/ SENDco', 'qualifications': ['Level 3 in Childcare, Education & Management', 'SEND Code of Practice'], 'awards': []}
    ]

def test_find_username(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = StaffRepository(db_connection)
    assert repository.find_username('Holly') == {'id': 2, 'name': 'Holly', 'image': 'Holly2.png', 'title': 'Deputy Manager', 'qualifications': ['International Diploma in Montessori Pedagogy', 'Level 5 Early Years Practitioner'], 'awards': ['Deputy Manager of the Year Award NMT 2023', 'Early Years Teacher of the Year Award AC 2023']}

def test_create(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = StaffRepository(db_connection)
    staffMember = Staff(28, 'Courtney', 'Courtney2.png', 'Teacher', ['Level 3 in Childcare'], ['Teacher of the year'])
    repository.create(staffMember)
    assert repository.all_staff()[-1] == {'id': 28, 'name': 'Courtney', 'image': 'Courtney2.png', 'title': 'Teacher', 'qualifications': ['Level 3 in Childcare'], 'awards': ['Teacher of the year']}

def test_delete(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = StaffRepository(db_connection)
    repository.delete('Holly')
    assert repository.all_staff()[0:3] == [
        {'id': 1, 'name': 'Gill', 'image': 'Gill2.png', 'title': 'Admin & Nutrition Lead',
            'qualifications': ['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], 'awards': []},
        {'id': 3, 'name': 'Lucy', 'image': 'Lucy2.png', 'title': 'Pedagogy Lead/ SENDco', 'qualifications': ['Level 3 in Childcare, Education & Management', 'SEND Code of Practice'], 'awards': []},
        {'id': 4, 'name': 'Megan', 'image': 'Megan2.png', 'title': 'Room Lead', 'qualifications': ['International Diploma in Montessori Pedagogy', 'Level 3 in Childcare & Education'], 'awards': ['Room Leader of the Year Award NMT 2023', 'NDNA Awards Runner Up 2023', 'Nursery World Awards Finalist 2022']}
    ]

def test_update(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = StaffRepository(db_connection)
    staff = Staff(1, 'Gill-Update', 'Gill-Update.png', 'Admin & Nutrition Lead',
            ['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], [])
    repository.update(staff)
    assert repository.find_username('Gill-Update') == {"id": 1, "name": 'Gill-Update', 'image': 'Gill-Update.png', 'title': 'Admin & Nutrition Lead',
            'qualifications': ['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], 'awards': []}

