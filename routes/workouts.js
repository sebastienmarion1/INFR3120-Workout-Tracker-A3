//following the same layout as the generated homepage.

var express = require('express');
var router = express.Router();

// This just connects the router to the workout model.
var Workout = require('../models/workout');

// Read operation adapted from the CRUD Part-1 Book listing route.
router.get('/', async function(req, res, next) {
  try {
    const workoutList = await Workout.find();

    res.render('workouts', {
      title: 'Workouts',
      workoutList: workoutList
    });
  } catch (error) {
    // This passes the database errors if any to the error handler middleware shown in class.
    next(error);
  }
});

// Displays the add form, using the CRUD example again.
router.get('/add', function(req, res, next) {
  res.render('addWorkout', { title: 'Add Workout' });
});

module.exports = router;