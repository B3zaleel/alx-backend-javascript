# TypeScript

This project contains tasks for learning to use TypeScript.

## Tasks To Complete

+ [x] 0. **Creating an interface for a student**<br/>[task_0/js/main.ts](task_0/js/main.ts) contains a script that meets the following requirements:
  + Write an interface named `Student` that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`.
  + Create two students, and create an array named `studentsList` containing the two variables.
  + Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table.
  + Each row should contain the first name of the student and the location.
  + When running, Webpack should return `No type errors found`.
  + Every variable should use TypeScript when possible.

+ [x] 1. **Let's build a Teacher interface**<br/>[task_1/js/main.ts](task_1/js/main.ts) contains a script that meets the following requirements:
  + `firstName(string)` and `lastName(string)`. These two attributes should only be modifiable when a Teacher is first initialized.
  + `fullTimeEmployee(boolean)` this attribute should always be defined.
  + `yearsOfExperience(number)` this attribute is optional.
  + `location(string)` this attribute should always be defined.
  + Add the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute.

+ [x] 2. **Extending the Teacher class**<br/>[task_1/js/main.ts](task_1/js/main.ts) contains the following updates:
  + Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`.

+ [x] 3. **Printing teachers**<br/>[task_1/js/main.ts](task_1/js/main.ts) contains the following updates:
  + Write a function `printTeacher`:
    + It accepts two arguments `firstName` and `lastName`.
    + It returns the first letter of the `firstName` and the full `lastName`.
    + Example: `printTeacher("John", "Doe") -> J. Doe`.
  + Write an interface for the function named `printTeacherFunction`.

+ [x] 4. **Writing a class**<br/>[task_1/js/main.ts](task_1/js/main.ts) contains the following updates:
  + Write a Class named `StudentClass`:
    + The constructor accepts `firstName(string)` and `lastName(string)` arguments.
    + The class has a method named `workOnHomework` that return the string `Currently working`.
    + The class has a method named `displayName`. It returns the firstName of the student.
    + The constructor of the class should be described through an Interface.
    + The class should be described through an Interface.
    + When running `npm run build`, no TypeScript error should be displayed.
    + Every variable should use TypeScript when possible.

+ [x] 5. **Advanced types Part 1**<br/>[task_2/js/main.ts](task_2/js/main.ts) contains a script that meets the following requirements:
  + Create the `DirectorInterface` interface with the 3 expected methods:
    + `workFromHome()` returning a string.
    + `getCoffeeBreak()` returning a string.
    + `workDirectorTasks()` returning a string.
  + Create the `TeacherInterface` interface with the 3 expected methods:
    + `workFromHome()` returning a string.
    + `getCoffeeBreak()` returning a string.
    + `workTeacherTasks()` returning a string.
  + Create a class `Director` that will implement `DirectorInterface`:
    + `workFromHome` should return the string `Working from home`.
    + `getToWork` should return the string `Getting a coffee break`.
    + `workDirectorTasks` should return the string `Getting to director tasks`.
  + Create a class `Teacher` that will implement `TeacherInterface`:
    + `workFromHome` should return the string `Cannot work from home`.
    + `getCoffeeBreak` should return the string `Cannot have a break`.
    + `workTeacherTasks` should return the string `Getting to work`.
  + Create a function `createEmployee` with the following requirements:
    + It can return either a `Director` or a `Teacher` instance.
    + It accepts 1 arguments:
      + `salary`(either number or string).
    + If `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`.

+ [x] 6. **Creating functions specific to employees**<br/>[task_2/js/main.ts](task_2/js/main.ts) contains the following updates:
  + Write a function `isDirector`:
    + It accepts `employee` as an argument.
    + It will be used as a type predicate and if the employee is a director.
  + Write a function `executeWork`:
    + It accepts `employee` as an argument.
    + If the employee is a `Director`, it will call `workDirectorTasks`.
    + If the employee is a `Teacher`, it will call `workTeacherTasks`.

+ [x] 7. **String literal types**<br/>[task_2/js/main.ts](task_2/js/main.ts) contains the following updates:
  + Write a String literal type named `Subjects` that allows a variable to have the value `Math` or `History` only.
  + Write a function named `teachClass`:
    + It takes `todayClass` as an argument.
    + It will return the string `Teaching Math` if `todayClass` is `Math`.
    + It will return the string `Teaching History` if `todayClass` is `History`.

+ [x] 8. **Ambient Namespaces**
  + [task_3/js/interfaces.ts](task_3/js/interfaces.ts) contains a script that meets the following requirements:
    + Export a type `RowID` and set it equal to `number`.
    + Export an interface `RowElement` that contains these 3 fields:
      + `firstName`: `string`.
      + `lastName`: `string`.
      + `age?`: `number`.
  + You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can't write a connector to the database, and you decided to download a library called `crud.js`. Copy the file, which is shown below, into the [task_3/js](task_3/js) directory.
    ```js
    export function insertRow(row) {
      console.log('Insert row', row);
      return Math.floor(Math.random() * Math.floor(1000));
    }

    export function deleteRow(rowId) {
      console.log('Delete row id', rowId);
      return;
    }

    export function updateRow(rowId, row) {
      console.log(`Update row ${rowId}`, row);

      return rowId;
    }
    ```
  + [task_3/js/crud.d.ts](task_3/js/crud.d.ts) is an ambient file that meets the following requirements:
    + Export the type declarations for each crud function.
    + At the top of the file, import `RowID` and `RowElement` from [task_3/js/interfaces.ts](task_3/js/interfaces.ts).
  + [task_3/js/main.ts](task_3/js/main.ts) contains a script that meets the following requirements:
    + At the top of the file create a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) that includes all the dependencies from [task_3/js/crud.d.ts](task_3/js/crud.d.ts).
    + Import the `RowID` type and `RowElement` from [task_3/js/interfaces.ts](task_3/js/interfaces.ts).
    + Import everything from [task_3/js/crud.js](task_3/js/crud.js) as `CRUD`.
    + Create an object called `row` with the type `RowElement` with the fields set to these values:
      + `firstName`: `Guillaume`.
      + `lastName`: `Salva`.
    + Create a `const` variable named `newRowID` with the type `RowID` and assign it the value of the `insertRow` command.
    + Next, create a `const` variable named `updatedRow` with the type `RowElement` and update `row` with an age field set to `23`.
    + Finally, call the `updateRow` and `deleteRow` commands.

+ [x] 9. **Namespace & Declaration merging**
  + [task_4/js/subjects/Teacher.ts](task_4/js/subjects/Teacher.ts) contains a script that meets the following requirements:
    + Export a `Teacher` interface in a namespace named `Subjects`.
    + The interface requires `firstName` and `lastName` as string.
  + [task_4/js/subjects/Subject.ts](task_4/js/subjects/Subject.ts) contains a script that meets the following requirements:
    + Export a `Subject` class in a namespace named `Subjects`.
    + The class has one attribute `teacher` that implements the `Teacher` interface.
    + the class has one setter method `setTeacher` that accepts a `teacher` in argument (and as setter, set the instance attribute `teacher` with it).
  + [task_4/js/subjects/Cpp.ts](task_4/js/subjects/Cpp.ts) contains a script that meets the following requirements:
    + Using declaration merging, add a new optional attribute `experienceTeachingC` (number) to the `Teacher` interface in a namespace named `Subjects`.
    + Export a class `Cpp` extending from `Subject` in a namespace named `Subjects`.
      + Write a method named `getRequirements` that will return a string `Here is the list of requirements for Cpp`.
      + Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`.
      + If the teacher doesn't have any experience in teaching C, then the method should return a string `No available teacher`.
  + [task_4/js/subjects/React.ts](task_4/js/subjects/React.ts) contains a script that meets the following requirements:
    + Export a `React` class in a namespace named `Subjects`.
    + Add a new attribute `experienceTeachingReact?` (number) to the `Teacher` interface.
    + In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for React`.
    + Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`.
    + If the teacher doesn't have any experience in teaching React, then the method should return a string `No available teacher`.
  + [task_4/js/subjects/Java.ts](task_4/js/subjects/Java.ts) contains a script that meets the following requirements:
    + Export a `Java` class in a namespace named `Subjects`.
    + Add a new attribute `experienceTeachingJava?` (number) to the `Teacher` interface.
    + In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for Java`.
    + Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`.
    + If the teacher doesn't have any experience in teaching Java, then the method should return a string `No available teacher`.

+ [x] 10. **Update task_4/js/main.ts**<br/>[task_4/js/main.ts](task_4/js/main.ts) contains the following updates:
  + Create and export a constant `cpp` for Cpp Subjects.
  + Create and export a constant `java` for Java Subjects.
  + Create and export a constant `react` for React Subjects.
  + Create and export one Teacher object `cTeacher` with `experienceTeachingC = 10`.
  + For Cpp subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return.
  + For Java subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.
  + For React subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.

+ [x] 11. **Brand convention & Nominal typing**<br/>[task_5/js/main.ts](task_5/js/main.ts) contains a script that meets the following requirements:
  + Create two interfaces `MajorCredits` and `MinorCredits`:
    + Each interface defines a number named `credits`.
    + Add a brand property to each interface in order to uniquely identify each of them.
  + Create two functions named `sumMajorCredits` and `sumMinorCredits`:
    + Each function takes two arguments `subject1` and `subject2`.
    + `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value.
    + Each function sums the credits of the two subjects.
