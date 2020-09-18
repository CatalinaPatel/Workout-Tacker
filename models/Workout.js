const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
    {

        day: {
            type: Date,
            defult: () => new Date(),
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Aerobic, muscle strengthening or flexibility?"
                },

                name: {
                    type: String,
                    trim: true,
                    required: "What is the name of the exercise??"
                },

                duration: {
                    type: String,
                    trim: true,
                    required: "How long did you exercise?"
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
            },
        ],

    });
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;