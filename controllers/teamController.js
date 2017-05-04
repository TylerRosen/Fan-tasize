var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = require('../config/connection.js')

router.get('/', function(req, res) {
    if (req.session.logged_in) {
        var query = "SELECT * FROM scores ORDER BY total_score DESC"

        connection.query(query, function(err, scores) {
            res.render('team/index', {
                scores: scores,
                logged_in: req.session.logged_in,
                user_email: req.session.user_email,
                user_id: req.session.user_id,
                username: req.session.username
            });

        });
    } else {
        res.redirect('/users/sign-in');
    }

});

router.get('/team', function(req, res) {
    if (req.session.logged_in) {
        var query = "SELECT * FROM scores ORDER BY total_score DESC"

        connection.query(query, function(err, scores) {
            res.render('team/team', {
                scores: scores,
                logged_in: req.session.logged_in,
                user_email: req.session.user_email,
                user_id: req.session.user_id,
                username: req.session.username
            });

        });
    } else {
        res.redirect('/users/sign-in');
    }

});

module.exports = router;