class Staff():
    # Set object attributes
    def __init__(self, id, name, image, title, qualifications, awards):
        self.id = id
        self.name = name
        self.image = image
        self.title = title
        self.qualifications = qualifications
        self.awards = awards

    # Equality method
    def __eq__(self, other):
        return self.__dict__ == other.__dict__

    # Formatting
    def __repr__(self):
        return f"Staff({self.id}, {self.name}, {self.image}, {self.title}, {self.qualifications}, {self.awards})"
