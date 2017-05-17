// Set up MySQL connection.
var mysql = require("mysql");
var app = require('../server');

// console.log('--------------the environment we are using----------------');
// console.log(app.settings.env);
// console.log('--------------the environment we are using----------------');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.evn.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "raiders76",
        database: "fantasy_db"
    });
};

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