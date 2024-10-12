import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const questions = [
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    correctOption: 0
  },
  {
    question: "Which company developed the Android operating system?",
    options: ["Apple", "Microsoft", "Google", "IBM"],
    correctOption: 2
  },
  {
    question: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Program", "HyperText Transmission Program"],
    correctOption: 0
  },
  {
    question: "What is the name of the first electronic general-purpose computer?",
    options: ["ENIAC", "UNIVAC", "IBM 701", "EDSAC"],
    correctOption: 0
  },
  {
    question: "Which programming language is known as the backbone of web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctOption: 1
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Active Memory"],
    correctOption: 0
  },
  {
    question: "Which company is known for the creation of the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    correctOption: 2
  },
  {
    question: "What is the main function of a web browser?",
    options: ["To compile code", "To browse the internet", "To manage files", "To edit photos"],
    correctOption: 1
  },
  {
    question: "What does AI stand for in technology?",
    options: ["Artificial Intelligence", "Automated Intelligence", "Advanced Intelligence", "Artificial Integration"],
    correctOption: 0
  },
  {
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
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
