from lib.user_repository import UserRepository
from lib.user import User

def test_get_single_user_by_username(db_connection):
    db_connection.seed("seeds/bookclub.sql")
    repository = UserRepository(db_connection)
    assert repository.find_username('montoya') == {'id':2,'username': 'montoya','email': 'montoya@gmail.com','password': b'prepare2die', 'child': None, 'role': 'parent', 'connections': None }
    
def test_create_users(db_connection):
    db_connection.seed("seeds/bookclub.sql")
    repository = UserRepository(db_connection)
    user = User(None, 'mustafa', 'mustafa@my.com', 'topsecret', None, None, None)
    repository.create(user)
    assert repository.find_id(4) == {'id':4,'username': 'mustafa','email': 'mustafa@my.com','password': b'topsecret', 'child': None, 'role': 'parent', 'connections': None }
    