I'm currently in the process of re-building my very first coding project - an updated website for a local nursery, Montessori Minds.

This isn't your average website anymore - it's been built with Python (Flask) on the backend, Javascript (React) on the frontend, and PostgreSQL for database management. It's enhanced with a secure employee portal, to enable the nursery direct control over adding, updating and deleting staff members as required.

# Installation instructions

These instructions are for macOS, (tested on version 14.4.1) It is assumed that that the following are already installed:

- node
- npm
- pipenv
- python
  if your interpreter is called using the command python3 or any other command incorporating version number, you may need to amend instructions accordingly, so that the “python” command invokes the interpreter
- PostgreSQL

After cloning the repository, using the CLI, change into the top-level directory of the locally cloned version. Then execute the following commands in sequence:

- cd frontend

- npm install

- npm install react-router-dom@latest

- npm run dev

The above should start the front-end server running in the terminal window. A new terminal tab will be needed. In that new terminal tab, again, change into the top-level directory of the locally cloned version of the project and in that same new terminal tab, enter the following commands:

- cd api

- pipenv install

- pipenv shell

- pipenv install Flask

- pipenv install psycopg

- createdb bookclub & createdb test_bookclub

- psql bookclub < seeds/bookclub.sql; psql test_bookclub < seeds/bookclub.sql

- python app.py

At this stage, both front-end and back-end servers should be running. Open the following link with your browser (currently tested on Safari version 17.4.1 )

http://localhost:5173/
