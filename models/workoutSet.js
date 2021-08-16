
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSetSchema = new Schema({
  day: {
    type: Date,
    trim: true,
  },
 exercises: [
    {
      name: String,
      weight: Number,
      duration: Number,
      reps: Number,
      distance: Number,
      sets: Number,
      type: String
    },
  ],
  
});

const WorkoutSet = mongoose.model("workoutSet", workoutSetSchema);

module.exports = WorkoutSet;
