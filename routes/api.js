const router = require("express").Router();
const db = require("../models/workout")

router.get("/api/workouts", (req, res) => {
    db.Workout.find(
        {}, (err, workouts))
        .then(workouts =>
            res.json(workouts)
        )
        // .catch(err => res.json(err));
})

router.put("/api/workouts", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: { exercises: req.body }
        }).then(workouts => {
            res.json(workouts)
        })
        // .catch(err => res.json(err))
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(newWorkout => {
        res.json(newWorkout)
    })
    // .catch(err => {
    //     res.json(err)
    // })
})

module.exports = router