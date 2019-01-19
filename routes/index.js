var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET some other page */
router.get('/login', function(req, res) {
  var db = req.db;
  var collection = db.get('blah');
  collection.find({}, {}, function(e, docs) {
    res.render('login', { 
      title: 'Login',
      "blah" : docs
  });
});

module.exports = router;
