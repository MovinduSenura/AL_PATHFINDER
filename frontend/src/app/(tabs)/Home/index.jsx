import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, Platform } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../../../assets/images/homeImage.png")}
      />

      <Text style={styles.forYou1}>FOR YOU!</Text>

      {/* Ensure the ScrollView has flex and padding/margin for display */}
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Pressable style={styles.card} onPress={() => router.push('/Questionnaire')}>
          <View style={styles.cardChild} />
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/skillTest.png")}
          />
          <Text style={styles.theSkillTest}>
            The Skill Test section offers quizzes across various subjects, allowing you to test your knowledge and track your progress by viewing your marks after each quiz.
          </Text>
          <Text style={styles.skillTest}>Skill Test</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => router.push('/Home/degreeselection')}>
          <View style={styles.cardChild} />
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/degreeSelection.png")}
          />
          <Text style={styles.theSkillTest}>
            The Degree Selection section helps students explore and choose university degrees based on their AL subjects, providing personalized guidance for their academic future.
          </Text>
          <Text style={styles.skillTest}>Degree Selection</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => {}}>
          <View style={styles.cardChild} />
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/teacherConsultation.png")}
          />
          <Text style={styles.theSkillTest}>
            The Teacher Consultation segment provides students with the opportunity to connect with teachers and resolve any academic issues, ensuring personalized support and guidance.
          </Text>
          <Text style={styles.skillTest}>Teacher Consultation</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => router.push('/Home/courseselection')}>
          <View style={styles.cardChild} />
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/course.png")}
          />
          <Text style={styles.theSkillTest}>
            The Course Selection section allows you to choose from a variety of courses. By completing these courses, you can earn diplomas to advance your skills and qualifications.
          </Text>
          <Text style={styles.skillTest}>Course Selection</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure full height
    alignItems: "stretch", // Allow content to stretch horizontally
    backgroundColor: "white",
  },
  icon: {
    width: "100%",
    height: 212,
  },
  forYou1: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: Platform.OS === 'ios' ? 'serif' : 'serif',
    color: "#353333",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  cardChild: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  onczpn8501Icon: {
    position: "absolute",
    left: 5,
    width: 97,
    height: 91,
    top: 5,
  },
  theSkillTest: {
    top: 23,
    fontSize: 10,
    fontFamily: Platform.OS === 'ios' ? 'serif' : 'serif',
    position: "absolute",
    left: 112,
    width: 235,
    textAlign: "justify",
    lineHeight: 14,
    color: "#000",
  },
  skillTest: {
    position: "absolute",
    top: 5,
    left: 112,
    fontSize: 13,
    fontWeight: "800",
    fontFamily: Platform.OS === 'ios' ? 'serif' : 'serif',
  },
  card: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: "90%",
    height: 102,
    marginBottom: 20,
    position: "relative",
  },
  scrollableSection: {
    flexGrow: 1, // Ensure scrolling
    paddingBottom: 20, // Add padding to avoid cutoff
    alignItems: "center", // Center cards horizontally
    marginTop: 5,
  },
});

export default Home;
