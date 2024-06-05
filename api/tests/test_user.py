 from lib.user import User

def test_constructs_user_object():
    example = User(1, "testusername", "test@gmail.com", "testpassword")
    assert example.id == 1
    assert example.username == "testusername"
    assert example.email == "test@gmail.com"
    assert example.password == "testpassword"

def test_equality():
    user1 = User(1, "testusername", "test@gmail.com", "testpassword")
    user2 = User(1, "testusername", "test@gmail.com", "testpassword")
    assert user1 == user2

def test_formatting():
    user = User(1, "testusername", "test@gmail.com", "testpassword")
    assert str(user) == "User(1, testusername, test@gmail.com, testpassword)"