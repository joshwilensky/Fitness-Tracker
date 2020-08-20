const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter a valid exercise!",
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter a valid exercise name!",
        },
        duration: {
            type: Number,
            required: "Please enter a valid duration time in seconds!",
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    }, ],
}, {
    toJSON: {
        virtuals: true,
    },
});
// ADDS A VIRTUAL FIELD TO THE SCHEMA
WorkoutSchema.virtual("totalWeight").get(function () {
    return this.weight * this.reps * this.sets;
});

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// CREATE WORKOUT MODEL
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;