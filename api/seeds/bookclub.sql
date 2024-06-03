DROP TABLE IF EXISTS test;
DROP SEQUENCE IF EXISTS test_id_seq;

DROP TABLE IF EXISTS staff;
DROP SEQUENCE IF EXISTS staff_id_seq;

DROP TABLE IF EXISTS connections;
DROP SEQUENCE IF EXISTS connections_id_seq;

DROP TABLE IF EXISTS recording_requests;
DROP SEQUENCE IF EXISTS recording_requests_id_seq;
DROP TYPE IF EXISTS reader_status_type;

DROP TABLE IF EXISTS recordings;
DROP SEQUENCE IF EXISTS recordings_id_seq;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS users_id_seq;

DROP TABLE IF EXISTS permissions;
DROP SEQUENCE IF EXISTS permissions_id_seq;

DROP TYPE IF EXISTS user_role;
DROP TYPE IF EXISTS status_type;

-- Then, we recreate them
CREATE SEQUENCE IF NOT EXISTS test_id_seq;
CREATE TABLE test (
    id SERIAL PRIMARY KEY,
    title VARCHAR( 100 ) NOT NULL
);

CREATE SEQUENCE IF NOT EXISTS staff_id_seq;
CREATE TABLE staff (
    id SERIAL PRIMARY KEY,
    name VARCHAR( 100 ) NOT NULL,
    image VARCHAR( 100 ) NOT NULL,
    title VARCHAR( 100 ) NOT NULL,
    qualifications text[],
    awards text[]
);

INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Gill', 'Gill.webp', 'Admin & Nutrition Lead', ARRAY['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Holly', 'Holly.webp', 'Deputy Manager', ARRAY['International Diploma in Montessori Pedagogy', 'Level 5 Early Years Practitioner'], ARRAY['Deputy Manager of the Year Award NMT 2023', 'Early Years Teacher of the Year Award AC 2023']);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Lucy', 'Lucy.webp', 'Pedagogy Lead/ SENDco', ARRAY['Level 3 in Childcare, Education & Management', 'SEND Code of Practice'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Megan', 'Megan.webp', 'Room Lead', ARRAY['International Diploma in Montessori Pedagogy', 'Level 3 in Childcare & Education'], ARRAY['Room Leader of the Year Award NMT 2023', 'NDNA Awards Runner Up 2023', 'Nursery World Awards Finalist 2022']);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Charlie', 'Charlie.webp', 'Admin & Nutrition Lead', ARRAY['Montessori Assistant Certificate', 'Food Hygiene & Safety Level 2'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Charlotte', 'Charlotte.webp', 'Deputy Manager', ARRAY['International Diploma in Montessori Pedagogy', 'Level 5 Early Years Practitioner'], ARRAY['Deputy Manager of the Year Award NMT 2023', 'Early Years Teacher of the Year Award AC 2023']);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Maria', 'Maria.webp', 'Pedagogy Lead/ SENDco', ARRAY['Level 3 in Childcare, Education & Management', 'SEND Code of Practice'], ARRAY[]::text[]);
INSERT INTO staff (name, image, title, qualifications, awards) VALUES ('Mollie', 'Mollie.webp', 'Room Lead', ARRAY['International Diploma in Montessori Pedagogy', 'Level 3 in Childcare & Education'], ARRAY['Room Leader of the Year Award NMT 2023', 'NDNA Awards Runner Up 2023', 'Nursery World Awards Finalist 2022']);