import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateAppointment = () => {
  const [teacherName, setTeacherName] = useState('');
  const [yourName, setYourName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = async () => {
    const templateParams = {
      teacher_name: teacherName,
      your_name: yourName,
      age,
      email,
      date: date.toLocaleDateString(),
      inquiry,
    };

    try {
      const response = await fetch('http://192.168.1.100:4700/send-email', { // Replace with your server IP
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });

      const result = await response.text();

      if (response.ok) {
        Alert.alert("Success", result);
        // Clear form fields after submission
        clearForm();
      } else {
        Alert.alert("Error", result);
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred. Please try again.");
      console.error("Failed to send email:", error);
    }
  };

  const clearForm = () => {
    setTeacherName('');
    setYourName('');
    setAge('');
    setEmail('');
    setDate(new Date());
    setInquiry('');
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name of the Teacher:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter teacher's name"
        value={teacherName}
        onChangeText={setTeacherName}
      />

      <Text style={styles.label}>Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={yourName}
        onChangeText={setYourName}
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Date:</Text>
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <Text style={styles.selectedDate}>
        Selected Date: {date.toLocaleDateString()}
      </Text>

      <Text style={styles.label}>Your Inquiry:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter your inquiry"
        value={inquiry}
        onChangeText={setInquiry}
        multiline
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <View style={styles.submitButtonContainer}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  selectedDate: {
    marginBottom: 15,
    fontSize: 16,
  },
  submitButton: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  submitButtonContainer: {
    backgroundColor: '#2E6E8E',
    paddingVertical: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateAppointment;
