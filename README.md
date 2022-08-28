# pass-your-plant
This web application was created to facilitate plant exchange. Users can register, login and then upload plants with details and comment on plants. The backend is Java Spring Boot, the frontend is React, and entities such as users, plants and comments are stored in a Postgresql database.


## Prerequisites
- [Java 17+](https://www.oracle.com/java/technologies/downloads/#java17)
- [Apache Maven 3.8.5 +](https://maven.apache.org/download.cgi)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [PostgreSQL 12.12 +](https://www.postgresql.org/download/)

## Set up PostgreSQL database
 - Install PostgreSQL 
 - Open a terminal and run the following psql command to create a user interactively:
   - sudo -u postgres createuser --interactive
 - Navigate to the pyp project folder
 - Run the following psql command to create a database:
   - createdb mydbname
 - Add environment variables for your psql user (USERNAME) and psql password (DATABASE_PASSWORD)

 ## Running backend using Maven
 - Open a terminal and navigate to the pyp project folder
 - Run the following Maven command to start the application:
    - ./mvnw clean spring-boot:run
    
 ## Running frontend using npm
 - Open another terminal and navigate to frontend/passyourplant folder
 - Run the command below if you are running the application for the first time
   - npm install
 - Run the npm command below to start the application
   - npm start

## Shutdown
- To stop the application, go to the terminal where it is running and press Ctrl+C.

## Reference
- Creating a PostgreSQL database: https://www.postgresql.org/docs/current/tutorial-createdb.html)
