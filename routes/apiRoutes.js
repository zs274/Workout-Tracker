const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req, res) => {
    db.Workout.find()
        .then(workouts => res.json(workouts))
        .catch(err => res.json(err));
});

router.post("/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.jsob(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/workouts/:id", (req, res) => {
    Workout.updateOne(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;