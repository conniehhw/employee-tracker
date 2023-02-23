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

var questions = {
  type: "list",
  message: "What would you like to do?", //question to print
  name: "viewAddUpdate",
  choices: [
    // array
    "View All Departments", // let viewDepart = view all depart. choice
    "View All Roles", //
    "View All Employees",
    "Add A Department",
    "Add A Role",
    "Add An Employee",
    "Update An Employee Role",
  ],
};

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
});

// if (answers === "View All Departments") {
//   db.query("SELECT * FROM DEPARTMENT", function (err, results) {
//     console.table(results);
//   });

//   // console.info("Answer:", answers.viewAddUpdate);
//   if (answers === "View All Departments") {
//     db.query("SELECT * FROM DEPARTMENT", function (err, results) {
//       console.table(results);
//     });
//   }
// });

// if (answers === "View All Departments") {
//   db.query("SELECT * FROM department", function (err, results) {
//           console.table(results);

//   }) } else if (answers === "View All Roles")
//     console.info("Answer:", answers.viewAddUpdate),
//     db.query("SELECT * FROM department", function (err, results) {
//       console.table(results);
// })
// });

// } else if (answers === "View All Roles")
//     console.info("Answer:", answers.viewAddUpdate);
//     db.query("SELECT * FROM roles", function (err, results) {
//     // console.log(results);
//     console.table(results);
//   })
// };

// // Query database
// db.query("SELECT * FROM department", function (err, results) {
//   console.log(results);
//   console.table(results);
// });

// db.query("SELECT * FROM roles", function (err, results) {
//   console.log(results);
//   console.table(results);
// });

// db.query("SELECT * FROM employee", function (err, results) {
//   console.log(results);
//   console.table(results);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
