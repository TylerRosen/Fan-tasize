var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/connection.js')

router.get('/', function(req, res) {
    var stats = {};
    connection.query('SELECT * FROM quarterbacks;', function(err, data) {
        stats.quarterbacks = data;
        connection.query('SELECT * FROM runningbacks;', function(err, data) {
            stats.runningbacks = data;
            connection.query('SELECT * FROM widereceivers', function(err, data) {
                stats.widereceivers = data;
                connection.query('SELECT * FROM tightends', function(err, data) {
                    stats.tightends = data;
                    connection.query('SELECT * FROM defense', function(err, data) {
                        stats.defense = data;
                        res.render('index', stats);
                    })
                })
            })
        })
    })
})

module.exports = router;