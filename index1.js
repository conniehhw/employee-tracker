const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");
const cTable = require("console.table");

var mcqList = {
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

db.query("SELECT * FROM departments", function (err, results) {
  console.log(results);
});

inquirer.prompt(mcqList);
console.table();