const mongoose = require('mongoose');

// Adapted from the Mongoose model in the class example.
// Every document will store one entry.
let workoutSchema = new mongoose.Schema({
  exerciseName: String,
  muscleGroup: String,
  sets: Number,
  reps: Number,
  weight: Number,
  date: Date
});

// then you export it so its available to the workout routes.
module.exports = mongoose.model('Workout', workoutSchema);