var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*changing the title */
  res.render('index', { title: 'Workout Tracker' });
});

module.exports = router;
