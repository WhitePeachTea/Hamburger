var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection({
      host: 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'q4lx0q846fywhovu',
      password: 'cortm4acd6yvpqoy',
      database: 'vcgvbphurjnrvd2x',
      port: 3306
    });
} else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'burgers_db'
    });
  }

  // Make connection.

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });


  // Export connection for our ORM to use.

  module.exports = connection;