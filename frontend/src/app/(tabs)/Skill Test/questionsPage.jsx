import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const questions = [
  {
    question: "What is 5 + 7?",
    options: ["10", "11", "12", "13"],
    correctOption: 2
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctOption: 2
  },
  {
    question: "What is 15% of 200?",
    options: ["20", "25", "30", "35"],
    correctOption: 2
  },
  {
    question: "What is the value of π (pi) to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctOption: 1
  },
  {
    question: "What is 9 x 9?",
    options: ["72", "81", "90", "99"],
    correctOption: 1
  },
  {
    question: "What is the derivative of x^2?",
    options: ["x", "2x", "x^2", "2x^2"],
    correctOption: 1
  },
  {
    question: "What is the integral of 1/x?",
    options: ["ln(x)", "1/x^2", "x", "e^x"],
    correctOption: 0
  },
  {
    question: "What is the solution to the equation 2x + 3 = 7?",
    options: ["x = 1", "x = 2", "x = 3", "x = 4"],
    correctOption: 1
  },
  {
    question: "What is the area of a triangle with base 5 and height 10?",
    options: ["25", "30", "35", "40"],
    correctOption: 0
  },
  {
    question: "What is the next prime number after 7?",
    options: ["9", "10", "11", "12"],
    correctOption: 2
  }
];

const QuestionsPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionPress = (index) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      Alert.alert("Quiz Completed", `Your score is ${score + 1}/${questions.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === index && styles.selectedOptionButton
          ]}
          onPress={() => handleOptionPress(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOptionButton: {
    backgroundColor: '#cce5ff',
    borderColor: '#007bff',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default QuestionsPage;
