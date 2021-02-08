// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DBHOST,
  port: 3306,
  user: process.env.DBUSER ,
  // NOTE: Be sure to add your MySQL password here!
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
