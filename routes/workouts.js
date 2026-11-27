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

//ADAPTED AGAIN FROM NOV 16TH CRUD LECTURE POST route
router.post('/add', async function(req, res, next) {
  try {
    //this is the building workout part, every section
    let newWorkout = Workout({
      exerciseName: req.body.exerciseName,
      muscleGroup: req.body.muscleGroup,
      sets: req.body.sets,
      reps: req.body.reps,
      weight: req.body.weight,
      date: req.body.date
    });

    //this will save the workout and add it to the list
    await Workout.create(newWorkout);
    res.redirect('/workouts');
  } catch (error) {
    next(error);
  }
});

//taken from the /edit/:id route in the lecture
router.get('/edit/:id', async function(req, res, next) {
  try {
    let workout = await Workout.findById(req.params.id);

    res.render('editWorkout', {
      title: 'Edit Workout',
      workout: workout
    });
  } catch (error) {
    next(error);
  }
});

//This will update whatever workout you pick
router.post('/edit/:id', async function(req, res, next) {
  try {
    let updatedWorkout = {
      exerciseName: req.body.exerciseName,
      muscleGroup: req.body.muscleGroup,
      sets: req.body.sets,
      reps: req.body.reps,
      weight: req.body.weight,
      date: req.body.date
    };

    // This will match the workout by its id, learned in the mean stack lecture 
    await Workout.updateOne(
      { _id: req.params.id },
      updatedWorkout
    );

    res.redirect('/workouts');
  } catch (error) {
    next(error);
  }
});

//adding a delete route, once again pulled from the CRUD class
router.get('/delete/:id', async function(req, res, next) {
  try {
    // Deletes the workout matching the ID in the URL
    await Workout.deleteOne({ _id: req.params.id });

    res.redirect('/workouts');
  } catch (error) {
    next(error);
  }
});

module.exports = router;