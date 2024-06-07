class User():
    # Set object attributes
    def __init__(self, id, username, email, password):
        self.id = id
        self.username = username
        self.email = email
        self.password = password

    # Equality method

    def __eq__(self, other):
        return self.__dict__ == other.__dict__

    # Formatting
    def __repr__(self):
        return f"User({self.id}, {self.username}, {self.email}, {self.password})"
