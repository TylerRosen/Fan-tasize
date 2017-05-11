var mysql = require("mysql");

if (app.settings.env == 'development') {
    var connection = mysql.createConnection({
        port: 3306,
        host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "j605fljbq1ql2utu",
        password: "uvae95o9emw70cyw",
        database: "n5z5wdf7movbhi4g"
    });
} else {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
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