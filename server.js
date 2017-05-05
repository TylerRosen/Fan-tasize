// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require('mysql');
var cookieParser = require('cookie-parser')

// Requres MySQL connection

var connection = require('./config/connection.js');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))


var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 } }));
app.use(cookieParser());



app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
var usersController = require("./controllers/usersController.js");
var teamController = require("./controllers/teamController.js");
app.use('/', routes);
app.use("/users", usersController);
app.use("/team", teamController);

// Add player

app.post('/add-player', function(req, res) {
    connection.query("SELECT * FROM user_players WHERE playerable_id = 1 AND playerable_type = 'tightends' AND users_id = 1");
    connection.query('INSERT INTO user_players (playerable_id, playerable_type, user_id) VALUES (1, "tightends", 1)');

});




var port = process.env.PORT || 3000;
app.listen(port);