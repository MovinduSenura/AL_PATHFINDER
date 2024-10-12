const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.post('/quizzes', quizController.createQuiz);
router.get('/quizzes', quizController.getQuizzes);
router.get('/quizzes/:id', quizController.getQuizById); // New route to get quiz by ID
router.patch('/quizzes/:id', quizController.updateQuiz);
router.delete('/quizzes/:id', quizController.deleteQuiz);

module.exports = router;
