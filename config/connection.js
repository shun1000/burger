// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    port:3306,
    host     : 'localhost',
    user     : 'root',
    password : 'Gaslamp459!', // Add your password
    database : 'burgers_db' // Add your database
  });
}

module.exports = connection;