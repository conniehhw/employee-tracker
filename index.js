const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
const cTable = require('console.table');

// fs.readFile('schema.sql', 'utf8', (error, data) =>
// error ? console.error(error) : console.log(data));

// const cTable = require("console.table");
// console.table([
//   {
//     name: "foo",
//     age: 10,
//   },
//   {
//     name: "bar",
//     age: 20,
//   },
// ]);


const askMain = 
    {
      type: "list",
      message: "What would you like to do?",
      name: "viewAddUp",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add A Department",
        "Add A Role",
        "Add An Employee",
        "Update An Employee Role",
      ]
    };
  
const addDepartment = {
      type: "input",
      message: "What is the name of the department?",
      name: "addDepart",
    };

const addRole = [
    {
      type: "input",
      message: "What is the name of the role?",
      name: "addRole",
    },
    {
      type: "input",
      message: "What is the salary of the role?",
      name: "addSalary",
    },

    {
      type: "input",
      message: "Which department does the role belong to?",
      name: "assignDepartment",
    },
  ]

  const addEmployee = [
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "addFirstName"
    },
    {
      type: "input",
      message: "What is the employee's last name?",
      name: "addLastName"
    },  
    {  
      type: "list",
      message: "What is the employee's role?",
      name: "assignRole",
      choices: [
            "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead"            
            ] 
      },
      {
        type: "input",
        message: "Who is the employee's manager?",
        name: "assignManager"
      },
    ]


  const updateEmployee = [
    { 
        type: "input",
        message: "Which employee's role do you want to update?",
        name: "updateEmployeer"
    },
    {
        type: "input",
        message: "Which role do you want to assign the selected employee??",
        name: "updateEmployeeRole"
    },
  ];
    

  inquirer.prompt(askMain);
  inquirer.prompt(addDepartment);
  inquirer.prompt(addRole);
  inquirer.prompt(addEmployee);
  inquirer.prompt(updateEmployee);
  


    // {
    //   type: "checkbox",
    //   message: "What languages do you know?",
    //   name: "stack",
    //   choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    // },
    // {
    //   type: "list",
    //   message: "What is your preferred method of communication?",
    //   name: "contact",
    //   choices: ["email", "phone", "telekinesis"],
    // },
  
  /*.then((data) => {
    const filename = `${data.toDo.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });*/

  // .then((answers) => {
  //   console.log();
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });
