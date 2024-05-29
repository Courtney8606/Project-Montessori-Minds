DROP TABLE IF EXISTS test;
DROP SEQUENCE IF EXISTS test_id_seq;

DROP TABLE IF EXISTS connections;
DROP SEQUENCE IF EXISTS connections_id_seq;

DROP TABLE IF EXISTS recordings;
DROP SEQUENCE IF EXISTS recordings_id_seq;

DROP TABLE IF EXISTS users;
DROP SEQUENCE IF EXISTS users_id_seq;

DROP TYPE IF EXISTS user_role;
DROP TYPE IF EXISTS status_type;

-- Then, we recreate them
CREATE SEQUENCE IF NOT EXISTS test_id_seq;
CREATE TABLE test (
    id SERIAL PRIMARY KEY,
    title VARCHAR( 100 ) NOT NULL
);

CREATE TYPE user_role AS ENUM ('child', 'parent');

CREATE SEQUENCE IF NOT EXISTS users_id_seq;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR( 100 ) NOT NULL,
    email VARCHAR( 100 ) NOT NULL,
    password VARCHAR( 100 ) NOT NULL,
    child VARCHAR( 100 ),
    role user_role,
    connections INTEGER[]
);

CREATE TYPE status_type AS ENUM ('pending', 'approved', 'rejected');

CREATE SEQUENCE IF NOT EXISTS connections_id_seq;
CREATE TABLE connections (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER REFERENCES users(id),
    reader_id INTEGER REFERENCES users(id),
    status status_type
);

CREATE SEQUENCE IF NOT EXISTS recordings_id_seq;
CREATE TABLE recordings (
    id SERIAL PRIMARY KEY,
    audio_file VARCHAR( 100 ) NOT NULL,
    title VARCHAR( 100 ) NOT NULL,
    parent_id INTEGER REFERENCES users(id),
    reader_id INTEGER REFERENCES users(id)
);

INSERT INTO users (username, email, password, role) VALUES ('mrs_dursley', 'dursley@gmail.com', 'hatemynephew123', 'parent');
INSERT INTO users (username, email, password, role) VALUES ('montoya', 'montoya@gmail.com', 'preapre2die', 'parent');
INSERT INTO users (username, email, password, role) VALUES ('remy', 'remy@gmail.com', 'kissthecook', 'parent');

INSERT INTO connections (parent_id, reader_id, status) VALUES (1, 2, 'approved');
INSERT INTO connections (parent_id, reader_id, status) VALUES (2, 3, 'approved');
INSERT INTO connections (parent_id, reader_id, status) VALUES (1, 3, 'rejected');

INSERT INTO recordings (audio_file, title, parent_id, reader_id) VALUES ('Test.mp3', 'The big surprise', 1, 2);
INSERT INTO recordings (audio_file, title, parent_id, reader_id) VALUES ('Test2.mp3', 'Teddy bear picnic', 1, 2);
INSERT INTO recordings (audio_file, title, parent_id, reader_id) VALUES ('Test3.mp3', 'A dragon for tea', 2, 3);
INSERT INTO recordings (audio_file, title, parent_id, reader_id) VALUES ('Test4.mp3', 'Lions, tigers and bears, oh my!', 2, 3);