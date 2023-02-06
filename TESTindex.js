var mysql = require('mysql2');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "root",    // user name to your mysql database
  password: "T8hm1m8!", // corresponding password
  database: "companyx_db" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  con.query("SELECT * FROM department JOIN role ON department.id = role.id;", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.table(result);
  });
});