var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../config/connection.js')

router.get('/', function(req, res) {
    console.log(req.session);
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
                        // connection.query('select jt.player as name, jt.id, jt.position from user_players ups left join ups.playerable_type jt ON jt.id = ups.playerable_id where ups.user_id = (?)', [req.session.user && req.session.user.id], function(err, data) {
                        // stats.user_players = data;
                        // console.log(stats.user_players);
                        stats.defense = data;
                        stats.user = req.session.user || null;
                        res.render('index', stats);
                        // })
                    })
                })
            })
        })
    })
})

module.exports = router;