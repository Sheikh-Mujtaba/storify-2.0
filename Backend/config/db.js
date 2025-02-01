// const mysql =require ('mysql');

// const db = mysql.createConnection ({
//     host : "localhost",
//     user : "root",
//     password : "",
//     database : "ecommerce"
// })
// module.exports = db ;
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'sql7.freesqldatabase.com',  // MySQL host from Strato
    user: 'sql7760650',                             // MySQL username
    password: 'YZB9rHrDbg',                   // MySQL password (replace with your password)
    database: 'sql7760650',                        // MySQL database name
});


module.exports = db;
