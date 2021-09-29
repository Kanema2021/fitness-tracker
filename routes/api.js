const router = require("express").Router();
const db = require("../models/workout.js")

router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(newWorkout => {
        res.json(newWorkout)
    })   
})

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        req.params.id,
        {
            $push: { exercises: req.body }
        }).then(workouts => {
            res.json(workouts)
        })
})

router.get("api/workouts/range", (req, res) => {
    db.Workout.find(
        {}, (err, workouts)
    .then((newWorkout) => {
        res.json(newWorkout)
    })
})


router.delete()

router.get("/api/workouts", (req, res) => {
    db.Workout.find(
        {}, (err, workouts))
        .then(workouts =>
            res.json(workouts)
        )
})

module.exports = router