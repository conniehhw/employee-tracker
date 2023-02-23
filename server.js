const express = require("express");
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

// Query database
db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
  console.table(results);
});

db.query("SELECT * FROM roles", function (err, results) {
  console.log(results);
  console.table(results);
});

db.query("SELECT * FROM employee", function (err, results) {
  console.log(results);
  console.table(results);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
