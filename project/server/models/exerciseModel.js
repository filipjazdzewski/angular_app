const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    equipment: {
      type: String,
      enum: ['barbell', 'dumbbell', 'kettlebell', 'machine', 'other', 'none'],
      required: [true, 'Please add equipment'],
    },
    bodyPart: {
      type: String,
      enum: [
        'abs',
        'back',
        'biceps',
        'calves',
        'cardio',
        'chest',
        'neck',
        'legs',
        'shoulders',
        'triceps',
      ],
      required: [true, 'Please add a body part'],
    },
    sets: [
      {
        reps: {
          type: Number,
          required: [true, 'Please add a number of reps'],
        },
      },
    ],
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Exercise', exerciseSchema);
