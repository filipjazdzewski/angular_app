const asyncHandler = require('express-async-handler');

const Exercise = require('../models/exerciseModel');

// @desc    Get exercises
// @route   GET /api/exercises
// @access  Public
const getExercises = asyncHandler(async (req, res) => {
  const exercises = await Exercise.find({}).sort({ updatedAt: -1 });

  res.status(200).json(exercises);
});

// @desc    Get exercise
// @route   GET /api/exercises/:id
// @access  Public
const getExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);

  if (!exercise) {
    res.status(404);
    throw new Error('Exercise not found');
  }

  res.status(200).json(exercise);
});

// @desc    Create new exercise
// @route   POST /api/exercises
// @access  Private
const createExercise = asyncHandler(async (req, res) => {
  const { name, description, equipment, bodyPart, sets } = req.body;

  if (!name && !description && !equipment && !bodyPart && !sets) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  const exercise = await Exercise.create({
    name,
    description,
    equipment,
    bodyPart,
    sets,
  });

  res.status(201).json(exercise);
});

// @desc    Delete user exercise
// @route   DELETE /api/exercises/:id
// @access  Private
const deleteExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);

  console.log(exercise);

  if (!exercise) {
    res.status(404);
    throw new Error('Exercise not found');
  }

  // if (exercise.createdBy.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error('Not Authorized');
  // }

  await Exercise.findByIdAndDelete(req.params.id);

  res.status(204).json({});
});

// @desc    Update user exercise
// @route   PUT /api/exercises/:id
// @access  Private
const updateExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);

  if (!exercise) {
    res.status(404);
    throw new Error('Exercise not found');
  }

  // if (exercise.createdBy.toString() !== req.user.id) {
  //   res.status(401);
  //   throw new Error('Not Authorized');
  // }

  await Exercise.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });

  const updatedExercise = await Exercise.findById(req.params.id);

  res.status(200).json(updatedExercise);
});

module.exports = {
  getExercises,
  getExercise,
  createExercise,
  deleteExercise,
  updateExercise,
};
