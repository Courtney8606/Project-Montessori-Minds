from lib.user_repository import UserRepository
from lib.user import User


def test_get_single_user_by_username(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = UserRepository(db_connection)
    assert repository.find_username('courtney') == {'id': 1, 'username': 'courtney', 'email': 'courtneylsuhr@gmail.com',
                                                   'password': b'testlogin'}

def test_all_users(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = UserRepository(db_connection)
    assert repository.find_all() == [{'id': 1, 'username': 'courtney', 'email': 'courtneylsuhr@gmail.com',
                                                   'password': b'testlogin'}]

def test_create_users(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = UserRepository(db_connection)
    user = User(None, 'testuser', 'testuser@my.com',
                'topsecret')
    repository.create(user)
    assert repository.find_all()[-1] == {'id': 2, 'username': 'testuser', 'email': 'testuser@my.com',
                                     'password': b'topsecret'}

def test_find_user_by_email(db_connection):
    db_connection.seed("seeds/montessori_data.sql")
    repository = UserRepository(db_connection)
    assert repository.find_email('courtneylsuhr@gmail.com') == {'id': 1, 'username': 'courtney', 'email': 'courtneylsuhr@gmail.com',
                                                   'password': b'testlogin'}


