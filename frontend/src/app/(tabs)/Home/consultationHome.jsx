import { Link, router } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";

const consultorData = [
  {
    id: '1',
    name: 'Mr. Buddhika Aluthge',
    title: 'School Teacher',
    email: 'buddhika.aluthge@example.com',
    image: require("../../../assets/images/budika.png"),
  },
  {
    id: '2',
    name: 'Mr. Charitha Dissanayake',
    title: 'Tuition Master',
    email: 'charitha.dissanayake@example.com',
    image: require("../../../assets/images/charith.png"),
  },
  {
    id: '3',
    name: 'Mr. Dinesh Muthugala',
    title: 'Tuition Master',
    email: 'dinesh.muthugala@example.com',
    image: require("../../../assets/images/dinesh.png"),
  },
  {
    id: '4',
    name: 'Mr. Ravindu Bandaranayake',
    title: 'Tuition Master',
    email: 'ravindu.bandaranayake@example.com',
    image: require("../../../assets/images/ravindu.png"),
  },
  {
    id: '5',
    name: 'Mr. Thissa Jananayake',
    title: 'Tuition Master',
    email: 'thissa.jananayake@example.com',
    image: require("../../../assets/images/thissa.jpg"),
  },
  {
    id: '6',
    name: 'Mr. Akila Wimanga',
    title: 'Tuition Master',
    email: 'akila.wimanga@example.com',
    image: require("../../../assets/images/akila.jpeg"),
  },
  {
    id: '7',
    name: 'Miss. Inoka Minipalaga',
    title: 'Tuition Master',
    email: 'inoka.minipalaga@example.com',
    image: require("../../../assets/images/inoka.jpeg"),
  },
];

const ConsultorCard = ({ consultor }) => (
  <View style={styles.card}>
    <Image style={styles.cardImage} source={consultor.image} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{consultor.name}</Text>
      <Text style={styles.cardSubtitle}>{consultor.title}</Text>
      {/* <Text style={styles.cardEmail}>Email: {consultor.email}</Text> */}
    </View>
    <TouchableOpacity
      style={styles.consultButton}
      onPress={() => router.push("/Home/createAppointment")}
    >
      <Text style={styles.consultButtonText}>Consult</Text>
    </TouchableOpacity>
  </View>
);

const Consultors = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={consultorData}
        renderItem={({ item }) => <ConsultorCard consultor={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.scrollableSection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  scrollableSection: {
    flexGrow: 1,
    paddingBottom: 20,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "95%",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  cardEmail: {
    fontSize: 14,
    color: "#007bff",
    marginTop: 5,
  },
  consultButton: {
    backgroundColor: "#2E6E8E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  consultButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Consultors;
