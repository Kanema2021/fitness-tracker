const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now},
    exercises: [
    {
        type: {
        type: String,
        required: "Enter type of exercise.",
    },
        name:{
        type: String,
        required: "Enter name of excercise.",
    },
        duration:{
        type: Number
    },
        weight:{
        type:Number
    },
        sets:{
        type: Number
    } 
   }
 ]
});
const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;