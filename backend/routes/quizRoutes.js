const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizController');

router.patch('/addquizzes', quizController.createQuiz);
router.get('/quizzes', quizController.getQuizzes);
router.patch('/quizzes/:id', quizController.updateQuiz);
router.delete('/quizzes/:id', quizController.deleteQuiz);

module.exports = router;