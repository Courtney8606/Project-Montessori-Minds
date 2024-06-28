DROP TABLE IF EXISTS staff;
DROP SEQUENCE IF EXISTS staff_id_seq;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS users_id_seq;

DROP TABLE IF EXISTS images;
DROP SEQUENCE IF EXISTS images_id_seq;

CREATE SEQUENCE IF NOT EXISTS staff_id_seq;
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    name VARCHAR( 100 ) NOT NULL,
    image VARCHAR( 100 ) NOT NULL,
    title VARCHAR( 100 ) NOT NULL,
    qualifications text[],
    awards text[]
);

CREATE SEQUENCE IF NOT EXISTS users_id_seq;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR( 100 ) NOT NULL,
    email VARCHAR( 100 ) NOT NULL,
    password BYTEA NOT NULL
);

CREATE SEQUENCE IF NOT EXISTS images_id_seq;
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    imagetitle VARCHAR( 100 ) NOT NULL
);

INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Gill', 'Gill.png', 'Admin & Nutrition Lead', ARRAY['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Holly', 'Holly.png', 'Deputy Manager', ARRAY['International Diploma in Montessori Pedagogy', 'Level 5 Early Years Practitioner'], ARRAY['Deputy Manager of the Year Award NMT 2023', 'Early Years Teacher of the Year Award AC 2023']);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Lucy', 'Lucy.png', 'Pedagogy Lead/ SENDco', ARRAY['Level 3 in Childcare, Education & Management', 'SEND Code of Practice'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Megan', 'Megan.png', 'Room Lead', ARRAY['International Diploma in Montessori Pedagogy', 'Level 3 in Childcare & Education'], ARRAY['Room Leader of the Year Award NMT 2023', 'NDNA Awards Runner Up 2023', 'Nursery World Awards Finalist 2022']);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Wendy', 'Wendy.png', 'Room Lead', ARRAY['Montessori Teacher/ Forest School Teacher', 'International Diploma in Montessori Pedagogy', 'Level 3 in Teaching & Learning in Schools', 'Level 3 Forest School Lead'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Destiny', 'Destiny.png', 'Room Lead', ARRAY['Early Years Educator', 'Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Charlie', 'Charlie.png', 'Room Lead', ARRAY['Early Years Educator', 'Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Kate', 'Kate.png', 'Room Lead', ARRAY['Early Years Educator', 'Level 3 in Childcare & Education (NNEB)'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Abbey', 'Abbey.png', '', ARRAY[]::text[], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Charlotte', 'Charlotte.png', 'Early Years Educator', ARRAY['Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Donovan', 'Donovan.png', 'Early Years Practitioner', ARRAY['Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Ellie', 'Ellie.png', 'Early Years Educator', ARRAY['Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Hediye', 'Hediye.png', 'Early Years Educator', ARRAY['Level 4 in Childcare & Education', 'I speak: Kurdish and Turkish'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Isabel', 'Isabel.png', '', ARRAY[]::text[], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Katie', 'Katie.png', 'Early Years Educator', ARRAY['Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Kimmy', 'Kimmy.png', '', ARRAY[]::text[], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Leticia', 'Leticia.png', 'Early Years Educator', ARRAY['BA in Tourism & Business Management', 'I speak: Chinese'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Lillie', 'Lillie.png', 'Nursery Apprentice', ARRAY['Working towards Level 3'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Maria', 'Maria.png', 'Early Years Educator', ARRAY['BA in International Relations & Development', 'Working towards MA in Global Development', ' I speak: Portuguese, Spanish and Guinea-Bissau Creole'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Marie', 'Marie.png', 'Montessori Teacher', ARRAY['International Diploma in Montessori Pedagogy', 'Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Mollie', 'Mollie.png', 'Montessori Assistant', ARRAY['Montessori Assistant Certificate', 'Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Rosie', 'Rosie.png', 'Early Years Practitioner', ARRAY['Working towards Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Ruby', 'Ruby.png', 'Early Years Practitioner', ARRAY['Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Rudina', 'Rudina.png', 'Early Years Educator', ARRAY['BA in Biology & Chemistry', 'Working towards QTS', 'I speak: Albanian and Italian'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Satwinder', 'Satwinder.png', 'Early Years Practitioner', ARRAY['Level 2 in Childcare & Education', 'Working towards level 3', 'I speak: Hindi and Punjabi'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Shermeka', 'Shermeka.png', 'Early Years Educator', ARRAY['BA in Dance Performance'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Tilly', 'Tilly.png', 'Nursery Apprentice', ARRAY['Working towards Level 3'], ARRAY[]::text[]);

INSERT INTO users (username, email, password) VALUES ('courtney', 'courtneylsuhr@gmail.com', 'testlogin');

