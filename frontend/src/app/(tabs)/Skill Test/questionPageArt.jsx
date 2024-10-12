import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const questions = [
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctOption: 2
  },
  {
    question: "What is the art style of Pablo Picasso known as?",
    options: ["Impressionism", "Cubism", "Surrealism", "Realism"],
    correctOption: 1
  },
  {
    question: "Which artist is famous for his painting 'Starry Night'?",
    options: ["Vincent van Gogh", "Salvador Dalí", "Claude Monet", "Henri Matisse"],
    correctOption: 0
  },
  {
    question: "What is the primary medium used in sculpture?",
    options: ["Oil paint", "Watercolor", "Clay", "Charcoal"],
    correctOption: 2
  },
  {
    question: "Which famous artist cut off his own ear?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    correctOption: 1
  },
  {
    question: "What is the term for a painting done on wet plaster?",
    options: ["Fresco", "Mosaic", "Etching", "Lithograph"],
    correctOption: 0
  },
  {
    question: "Which artist is known for the painting 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "Pablo Picasso", "Henri Matisse", "Claude Monet"],
    correctOption: 0
  },
  {
    question: "What is the name of the famous museum in Paris that houses the Mona Lisa?",
    options: ["The Louvre", "The Met", "The British Museum", "The Prado"],
    correctOption: 0
  },
  {
    question: "Which art movement is characterized by a focus on light and color?",
    options: ["Baroque", "Renaissance", "Impressionism", "Cubism"],
    correctOption: 2
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Donatello"],
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
