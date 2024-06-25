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

INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Gill', 'Gill.webp', 'Admin & Nutrition Lead', ARRAY['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Holly', 'Holly.webp', 'Deputy Manager', ARRAY['International Diploma in Montessori Pedagogy', 'Level 5 Early Years Practitioner'], ARRAY['Deputy Manager of the Year Award NMT 2023', 'Early Years Teacher of the Year Award AC 2023']);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Lucy', 'Lucy.webp', 'Pedagogy Lead/ SENDco', ARRAY['Level 3 in Childcare, Education & Management', 'SEND Code of Practice'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Megan', 'Megan.webp', 'Room Lead', ARRAY['International Diploma in Montessori Pedagogy', 'Level 3 in Childcare & Education'], ARRAY['Room Leader of the Year Award NMT 2023', 'NDNA Awards Runner Up 2023', 'Nursery World Awards Finalist 2022']);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Wendy', 'Wendy.webp', 'Room Lead', ARRAY['Montessori Teacher/ Forest School Teacher', 'International Diploma in Montessori Pedagogy', 'Level 3 in Teaching & Learning in Schools', 'Level 3 Forest School Lead'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Destiny', 'Destiny.webp', 'Room Lead', ARRAY['Early Years Educator', 'Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Charlie', 'Charlie.webp', 'Room Lead', ARRAY['Early Years Educator', 'Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Kate', 'Kate.webp', 'Room Lead', ARRAY['Early Years Educator', 'Level 3 in Childcare & Education (NNEB)'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Charlotte', 'Charlotte.webp', 'Early Years Educator', ARRAY['Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Shermeka', 'Shermeka.webp', 'Early Years Educator', ARRAY['BA in Dance Performance'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Rudina', 'Rudina.webp', 'Early Years Educator', ARRAY['BA in Biology & Chemistry', 'Working towards QTS', 'I speak: Albanian and Italian'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Marie', 'Marie.webp', 'Montessori Teacher', ARRAY['International Diploma in Montessori Pedagogy', 'Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Leticia', 'Leticia.webp', 'Early Years Educator', ARRAY['BA in Tourism & Business Management', 'I speak: Chinese'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Donovan', 'Donovan.webp', 'Early Years Practitioner', ARRAY['Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Mollie', 'Mollie.webp', 'Montessori Assistant', ARRAY['Montessori Assistant Certificate', 'Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Katie', 'Katie.webp', 'Early Years Educator', ARRAY['Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Ellie', 'Ellie.webp', 'Early Years Educator', ARRAY['Level 3 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Maria', 'Maria.webp', 'Early Years Educator', ARRAY['BA in International Relations & Development', 'Working towards MA in Global Development', ' I speak: Portuguese, Spanish and Guinea-Bissau Creole'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Ruby', 'Ruby.webp', 'Early Years Practitioner', ARRAY['Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Tilly', 'Tilly.webp', 'Nursery Apprentice', ARRAY['Working towards Level 3'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Satwinder', 'Satwinder.webp', 'Early Years Practitioner', ARRAY['Level 2 in Childcare & Education', 'Working towards level 3', 'I speak: Hindi and Punjabi'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Rosie', 'Rosie.webp', 'Early Years Practitioner', ARRAY['Working towards Level 2 in Childcare & Education'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Hediye', 'Hediye.webp', 'Early Years Educator', ARRAY['Level 4 in Childcare & Education', 'I speak: Kurdish and Turkish'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Lillie', 'Lillie.webp', 'Nursery Apprentice', ARRAY['Working towards Level 3'], ARRAY[]::text[]);

INSERT INTO users (username, email, password) VALUES ('mrs_dursley', 'dursley@gmail.com', 'hatemynephew123');
INSERT INTO users (username, email, password) VALUES ('montoya', 'montoya@gmail.com', 'prepare2die');
INSERT INTO users (username, email, password) VALUES ('remy', 'remy@gmail.com', 'kissthecook');
