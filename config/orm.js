var connection = require('./connection.js');
mysql = require('mysql');

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM tophundred;', function(err, data) {
            if (err) throw err;
            cb(result);
        });
    },

    create: function(tableInput, condition, cb) {
        connection.query('select * from user_players where playerable_id = 1 AND playerable_type = "tightends" AND user_id = 1' + ";", function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

};

module.exports = orm;