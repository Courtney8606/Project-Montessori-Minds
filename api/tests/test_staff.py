from lib.staff import Staff


def test_constructs_user_object():
    example = Staff(1, "Gill", "gill.webp", "Administrator",
                    ['Qual1, Qual2'], ['Award'])
    assert example.id == 1
    assert example.name == "Gill"
    assert example.image == "gill.webp"
    assert example.title == "Administrator"
    assert example.qualifications == ['Qual1, Qual2']
    assert example.awards == ['Award']


def test_equality():
    staff1 = Staff(1, "Gill", "gill.webp", "Administrator",
                   ['Qual1, Qual2'], ['Award'])
    staff2 = Staff(1, "Gill", "gill.webp", "Administrator",
                   ['Qual1, Qual2'], ['Award'])
    assert staff1 == staff2


def test_formatting():
    staff = Staff(1, "Gill", "gill.webp", "Administrator",
                  ['Qual1, Qual2'], ['Award'])
    assert str(
        staff) == "Staff(1, Gill, gill.webp, Administrator, ['Qual1, Qual2'], ['Award'])"
