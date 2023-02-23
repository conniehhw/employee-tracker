const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
// const cTable = require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  // passing this object db
  {
    host: "localhost", // MySQL username
    user: "root", // MySQl pw
    password: "T8hm1m8!",
    database: "companyEmployee_db",
  },
  console.log(`Connected to the companyEmployee-db database.`) //2nd argument?
);

app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
});

// list of main menu questions
var questions = {
  type: "list",
  message: "What would you like to do?", //question to print
  name: "viewAddUpdate",
  choices: [
    // array
    "View All Departments", //
    "View All Roles", //
    "View All Employees",
    "Add A Department",
    "Add A Role",
    "Add An Employee",
    "Update An Employee Role",
  ],
};
// question prompting user input
var addDepartment = {
  type: "input",
  message: "What is the name of the department?",
  name: "addDepart",
};

// method to prompt questions; based on user answers, database queries the corresponding table to console.
inquirer.prompt(questions).then(function (answers) {
  console.log(answers.viewAddUpdate);
  if (answers.viewAddUpdate === "View All Departments") {
    db.query("SELECT * FROM DEPARTMENT", function (err, results) {
      console.table(results);
    });
  }
  if (answers.viewAddUpdate === "View All Roles") {
    db.query("SELECT * FROM ROLES", function (err, results) {
      console.table(results);
    });
  }
  if (answers.viewAddUpdate === "View All Employees") {
    db.query("SELECT * FROM EMPLOYEE", function (err, results) {
      console.table(results);
    });
  }
  if (answers.viewAddUpdate === "Add A Department") {
    //need correct syntax to insert user answer into corresponding table
    inquirer.prompt(addDepartment).then(function (answers) {
      console.info(answers.addDepart);
      db.query(
        "INSERT INTO department (id, department_name) VALUES ?",
        ("id", "department_name")
      ),
        function (err, results) {
          console.table(results);
        };
    });
  }
});
