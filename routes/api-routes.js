const db = require("../models");
const Workout = db.Workout;

module.exports = function (app) {

    // CREATE WORKOUT POST
    app.post("/api/workouts", ({
        body
    }, res) => {
        Workout.create(body)
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // CREATE A PUT FOR WORKOUT
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, {
                $push: {
                    exercises: req.body
                },
            })
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // GET WORKOUT INFO
    app.get("/api/workouts", (req, res) => {
        //  grabbing it from database
        //  populate properties array
        Workout.find({})
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });
};