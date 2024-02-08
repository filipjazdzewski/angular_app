const express = require('express');
const router = express.Router();
const {
  getExercises,
  getExercise,
  createExercise,
  deleteExercise,
  updateExercise,
} = require('../controllers/exerciseController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getExercises).post(createExercise);

router
  .route('/:id')
  .get(getExercise)
  .delete(deleteExercise)
  .put(updateExercise);

module.exports = router;
