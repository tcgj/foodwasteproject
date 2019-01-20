var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { user : req.user });
});

router.get('/register', function(req, res) {
  res.render('register', { });
});

router.post('/register', function(req, res) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.render('register', { account : account });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/error' }), function(req, res) {
  res.redirect('/');
});

router.get('/error', function(req, res) {
  res.render('error', { user : req.user });
});


router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/menu', function(req, res) {
  res.render('menu', { user : req.user });
});


router.get('/pollresults', function(req, res) {
  res.render('pollresults', { user : req.user });
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;
