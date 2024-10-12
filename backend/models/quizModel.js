const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    quizTitle: { type: String, required: true },
    correctAns: { type: String, required: true },
    givenAns: { type: String },
    checkedAns: { type: Boolean },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;