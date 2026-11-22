//following the same layout as the generated homepage

var express = require('express');
var router = express.Router();

//displaying the workout list page
router.get('/', function(req, res, next) {
  res.render('workouts', { title: 'Workouts' });
});

module.exports = router;