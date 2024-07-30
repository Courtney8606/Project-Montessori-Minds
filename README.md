# Nursery Website Enhancement and Employee Portal

## Project Overview

Collaborating with a local nursery Montessori Minds to enhance their online presence by customising their website to meet specific operational needs. The project includes modernising the site and introducing an employer portal for real-time content updates.

## Features

- **Custom Website Design**: Tailored to the nursery's specific requirements.
- **Employer Portal**: Allows staff to efficiently manage and update website content in real-time.
- **Responsive Design**: Ensures a seamless user experience across all devices.

## Demo

In progress.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Python, Flask
- **Database**: PostgreSQL
- **Version Control**: Git, GitHub
- **Deployment**: TBC

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

- createdb montessoriminds & createdb test_montessoriminds

- psql montessoriminds < seeds/montessori_data.sql; psql test_montessoriminds < seeds/montessori_data.sql

- python app.py

At this stage, both front-end and back-end servers should be running. Open the following link with your browser (currently tested on Safari version 17.4.1 )

http://localhost:5173/
