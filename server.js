const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(  // passing this object db
   {
    host: 'localhost',      // MySQL username
    user: 'root',           // MySQl pw
    password: 'T8hm1m8!',
    database: 'companyEmployee_db'
   }, 
   console.log(`Connected to the companyEmployee-db database.`) //2nd argument?
);

//Query Database
db.query('SELECT * FROM <tablename>', function (err, results) {
    console.log(results);
});

// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});