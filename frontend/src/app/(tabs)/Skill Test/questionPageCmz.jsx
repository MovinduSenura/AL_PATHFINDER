import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const questions = [
  {
    question: "What is the primary objective of financial management?",
    options: ["Profit Maximization", "Wealth Maximization", "Sales Maximization", "Cost Minimization"],
    correctOption: 1
  },
  {
    question: "Which financial statement shows a company's assets, liabilities, and equity?",
    options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Statement of Retained Earnings"],
    correctOption: 1
  },
  {
    question: "What is the term for the cost of borrowing money?",
    options: ["Interest", "Dividend", "Capital", "Expense"],
    correctOption: 0
  },
  {
    question: "Which market structure is characterized by a single seller?",
    options: ["Perfect Competition", "Monopoly", "Oligopoly", "Monopolistic Competition"],
    correctOption: 1
  },
  {
    question: "What is the formula for calculating Gross Profit?",
    options: ["Revenue - Expenses", "Revenue - Cost of Goods Sold", "Net Income - Expenses", "Net Income - Cost of Goods Sold"],
    correctOption: 1
  },
  {
    question: "Which type of business organization is owned by shareholders?",
    options: ["Sole Proprietorship", "Partnership", "Corporation", "Cooperative"],
    correctOption: 2
  },
  {
    question: "What is the term for the total market value of all final goods and services produced in a country?",
    options: ["Gross Domestic Product", "Net National Product", "Gross National Product", "Net Domestic Product"],
    correctOption: 0
  },
  {
    question: "Which accounting principle states that revenue should be recognized when it is earned?",
    options: ["Matching Principle", "Revenue Recognition Principle", "Cost Principle", "Full Disclosure Principle"],
    correctOption: 1
  },
  {
    question: "What is the term for the reduction in the value of an asset over time?",
    options: ["Appreciation", "Depreciation", "Amortization", "Depletion"],
    correctOption: 1
  },
  {
    question: "Which financial ratio measures a company's ability to pay short-term obligations?",
    options: ["Current Ratio", "Debt-to-Equity Ratio", "Return on Equity", "Gross Margin"],
    correctOption: 0
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
