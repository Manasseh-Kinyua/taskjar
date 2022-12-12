# Taskjar
> Task management is one of the major challenges for teams when working on projects. Taskjar is a task management software aimed at aiding teams with assigment, dispatchment and tracking of tasks.

# Developer
[Manasseh Kinyua](https://github.com/Manasseh-Kinyua)

## GIF Demo
![](https://github.com/Manasseh-Kinyua/nasseh_gif/blob/master/taskgggggg.gif)

## Technologies Used
* React
* Redux
* Bootstrap
* MUI
* Django
* Django Rest Framework & DRF Simple JWT
* Postgres
* AWS RDS

## Features
1. Authentication & Authorization
1. Create Study Room
1. Edit Room
1. Delete Room
1. Add Participants
1. Room Messaging
1. See Recent Activity
1. Room Reviewing
1. See Reviews
1. User Profile
1. Edit Profile

 #### Admin Features
 1. See all Users
 1. Give admin status to users
 1. Remove Users
 1. See all rooms
 1. Delete room
 1. See all messages
 1. Delete message

## Installation
1. Download/clone repo.

    ```bash
      git clone https://github.com/Manasseh-Kinyua/estudiar.git
    ```
1. Navigate to project folder.

    ```bash
      cd estudiar
    ```
    
1. Create and activate a virtual environment.(may vary across operating systems. This is for linux users.)

    ```bash
      virtualenv <environment-name>
    ```
    
    ```bash
      <environment-name>/bin/activate
    ```
    
1. Install Django and other dependencies.

    ```bash
      pip freeze > requirements.txt
    ```
    
1. Run Django app.

    ```bash
      python manage.py runserver
    ```
    
1. Navigate to react app.

    ```bash
      cd frontend
    ```
    
1. Install react dependencies.

    ```bash
      npm install
    ```
    
1. Run nreact app.

    ```bash
      npm start
    ```
    
Setup complete. Happy coding!!!

1. Once you are done coding, build react app push branch for review.

    ```bash
      npm run build
    ```
