# NodeJS Basics

This project contains tasks for learning to the basics of NodeJS.

## Tasks To Complete

+ [x] 0. **Executing basic javascript with Node JS**<br/>[0-console.js](0-console.js) contains a module that exports a function named `displayMessage` that prints in `STDOUT` the string argument.

+ [x] 1. **Using Process stdin**<br/>[1-stdin.js](1-stdin.js) contains a script that will be executed through the command line with the following requirements:
  + It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line).
  + The user should be able to input their name on a new line.
  + The program should display `Your name is: INPUT`.
  + When the user ends the program, it should display `This important software is now closing` (followed by a new line).

+ [x] 2. **Reading a file synchronously with Node JS**<br/>[2-read_file.js](2-read_file.js) contains a module that exports a function `countStudents` with the following requirements:
  + Create a function named `countStudents`. It should accept a path in argument.
  + The script should attempt to read the database file synchronously.
  + The database file has the same format as [database.csv](database.csv).
  + If the database is not available, it should throw an error with the text `Cannot load the database`.
  + If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
  + It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 3. **Reading a file asynchronously with Node JS**<br/>[3-read_file_async.js](3-read_file_async.js) contains a module that exports a function `countStudents` with the following requirements:
  + Create a function named `countStudents`. It should accept a path in argument (same as in [2-read_file.js](2-read_file.js)).
  + The script should attempt to read the database file asynchronously.
  + The database file has the same format as [database.csv](database.csv).
  + The function should return a Promise.
  + If the database is not available, it should throw an error with the text `Cannot load the database`.
  + If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
  + It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 4. **Create a small HTTP server using Node's HTTP module**<br/>[4-http.js](4-http.js) contains a script that creates and exports a small HTTP server using the `http` module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + Displays `Hello Holberton School!` in the page body for any endpoint as plain text.

+ [x] 5. **Create a more complex HTTP server using Node's HTTP module**<br/>[5-http.js](5-http.js) contains a script that creates and exports a small HTTP server using the `http` module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + It should return plain text.
  + When the URL path is `/`, it should display `Hello Holberton School!` in the page body.
  + When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 6. **Create a small HTTP server using Express**<br/>[6-http_express.js](6-http_express.js) contains a script that creates and exports a small HTTP server using the Express module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + Displays `Hello Holberton School!` in the page body for the endpoint `/`.

+ [x] 7. **Create a more complex HTTP server using Express**<br/>[7-http_express.js](7-http_express.js) contains a script creates and exports a small HTTP server using the Express module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + It should return plain text.
  + When the URL path is `/`, it should display Hello Holberton School! in the page body.
  + When the URL path is `/students`, it should display This is the list of our students followed by the same content as the file [3-read_file_async.js](3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 8. **Organize a complex HTTP server using Express**<br />Writing every part of a server within a single file is not sustainable. Create a full server in a directory named [`full_server`](full_server) with the requirements listed below.<br />Since you have used ES6 and Babel in the past projects, let's use `babel-node` to allow to use ES6 functions like `import` or `export`.
  + **8.1 Organize the structure of the server**
    + Create 2 directories within the [full_server](full_server) folder:
      + [controllers](full_server/controllers/).
      + [routes](full_server/routes/).
    + Create a file [full_server/utils.js](full_server/utils.js) with a function named readDatabase that accepts a file path as an argument:
      + It should read the database asynchronously.
      + It should return a promise.
      + When the file is not accessible, it should reject the promise with the error.
      + When the file can be read, it should return an object of arrays of the firstname of students per field.
  + **8.2 Write the App controller**<br />Inside the file [full_server/controllers/AppController.js](full_server/controllers/AppController.js):
    + Create a class named `AppController`. Add a static method named `getHomepage`.
    + The method accepts `request` and `response` as argument. It returns a 200 status and the message `Hello Holberton School!`.
  + **8.3 Write the Students controller**<br />Inside the file [full_server/controllers/StudentsController.js](full_server/controllers/StudentsController.js), create a class named `StudentsController`. Add two static methods:
    + The first one is `getAllStudents`:
      + The method accepts `request` and `response` as argument.
      + It should return a status 200.
      + It calls the function `readDatabase` from the [utils](full_server/utils.js) file, and display in the page:
        + First line: `This is the list of our students`.
        + And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
      + If the database is not available, it should return a status 500 and the error message `Cannot load the database`.
    + The second one is `getAllStudentsByMajor`:
      + The method accepts `request` and `response` as argument.
      + It should return a status 200.
      + It uses a parameter that the user can pass to the browser `major`. The `major` can only be `CS` or `SWE`. If the user is passing another parameter, the server should return a 500 and the error `Major parameter must be CS or SWE`.
      + It calls the function `readDatabase` from the [utils](full_server/utils.js) file, and displays in the page the list of first names for the students (ordered by appearance in the database file) in the specified field `List: LIST_OF_FIRSTNAMES_IN_THE_FIELD`.
      + If the database is not available, it should return a status 500 and the error message `Cannot load the database`.
  + **8.4 Write the routes**<br />Inside the file [full_server/routes/index.js](full_server/routes/index.js):
    + Link the route `/` to the `AppController`.
    + Link the route `/students` and `/students/:major` to the `StudentsController`.
  + **8.5 Write the server reusing everything you created**<br />Inside the file named [full_server/server.js](full_server/server.js), create a small Express server:
    + It should use the routes defined in [full_server/routes/index.js](full_server/routes/index.js).
    + It should use the port `1245`.
  + **8.6 Update `package.json` (if you are running it from inside the folder `full_server`)**
    + If you are starting node from inside of the folder [full_server](full_server/), you will have to update the command `dev` by: `nodemon --exec babel-node --presets babel-preset-env ./server.js ../database.csv`.
  + **Warning:**
    + Don't forget to export your express app at the end of [server.js](full_server/server.js) (`export default app;`).
    + The database filename is passed as argument of the [server.js](full_server/server.js) BUT, for the purpose of testing, you should retrieve this filename at the execution or when it's needed (when `getAllStudents` or `getAllStudentsByMajor` are called for example).
  + If you want to add test to validate your integration, you will need to add this file: [.babelrc](.babelrc).
    ```js
    {
        "presets": [["env", {"exclude": ["transform-regenerator"]}]]
    }
    ```
