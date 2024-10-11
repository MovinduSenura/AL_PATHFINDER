import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Using AntDesign for the arrow icons

const degrees = [
  {
    id: '1',
    title: 'Bachelor of Science in Computer \nScience',
    details: `The Bachelor of Science in Computer Science program provides a strong foundation in computer science principles and prepares graduates for a career in technology. Key areas of study include programming, algorithms, and software development practices.\n\nCore Subjects:\n• Programming Fundamentals\n• Data Structures\n• Computer Architecture\n• Software Engineering\n• Database Management\n• Web Development`,
  },
  {
    id: '2',
    title: 'Bachelor of Arts in Business Administration',
    details: `This degree offers comprehensive training in business management, economics, and organizational behavior, preparing graduates for leadership roles in various industries.\n\nCore Subjects:\n• Principles of Management\n• Financial Accounting\n• Marketing Management\n• Business Ethics\n• Human Resource Management\n• Strategic Planning`,
  },
  {
    id: '3',
    title: 'Bachelor of Arts in Psychology',
    details: `The BA in Psychology provides an understanding of human behavior, mental processes, and emotional well-being, with applications in various fields, including counseling, education, and human resources.\n\nCore Subjects:\n• Introduction to Psychology\n• Developmental Psychology\n• Abnormal Psychology\n• Research Methods\n• Social Psychology\n• Cognitive Psychology`,
  },
  {
    id: '4',
    title: 'Bachelor of Science in Nursing',
    details: `This degree prepares students for a career in nursing, focusing on patient care, health promotion, and disease prevention.\n\nCore Subjects:\n• Anatomy and Physiology\n• Pharmacology\n• Nursing Fundamentals\n• Health Assessment\n• Community Health Nursing\n• Mental Health Nursing`,
  },
  {
    id: '5',
    title: 'Bachelor of Arts in Graphic Design',
    details: `This program teaches students the principles of design, creativity, and digital media, preparing them for careers in graphic design and multimedia production.\n\nCore Subjects:\n• Visual Communication\n• Typography\n• Digital Imaging\n• User Experience Design\n• Branding and Identity\n• Portfolio Development`,
  },
  {
    id: '6',
    title: 'Bachelor of Science in Environmental Science',
    details: `The degree focuses on environmental issues, sustainability, and conservation, equipping students for careers in environmental management and policy.\n\nCore Subjects:\n• Ecology\n• Environmental Chemistry\n• Geographical Information Systems (GIS)\n• Environmental Policy\n• Climate Change Studies\n• Natural Resource Management`,
  },
  {
    id: '7',
    title: 'Bachelor of Arts in Sociology',
    details: `This degree examines human society, social behavior, and cultural phenomena, preparing students for careers in social research, community development, and social work.\n\nCore Subjects:\n• Introduction to Sociology\n• Social Theory\n• Research Methods in Sociology\n• Urban Sociology\n• Social Inequality\n• Globalization and Social Change`,
},

{
    id: '8',
    title: 'Bachelor of Science in Data Science',
    details: `This program focuses on statistical analysis, machine learning, and data visualization, preparing graduates for careers in data analysis and data-driven decision-making.\n\nCore Subjects:\n• Introduction to Data Science\n• Statistical Methods\n• Machine Learning\n• Data Visualization\n• Big Data Technologies\n• Data Ethics and Privacy`,
},

{
    id: '9',
    title: 'Bachelor of Engineering in Civil Engineering',
    details: `This degree provides students with the knowledge and skills to design and construct infrastructure projects, including buildings, bridges, and highways.\n\nCore Subjects:\n• Structural Analysis\n• Fluid Mechanics\n• Geotechnical Engineering\n• Transportation Engineering\n• Construction Management\n• Environmental Engineering`,
},

{
    id: '10',
    title: 'Bachelor of Arts in History',
    details: `This program explores historical events, trends, and movements, providing students with critical thinking skills applicable to various fields, including education and public policy.\n\nCore Subjects:\n• World History\n• American History\n• European History\n• Historical Research Methods\n• Historiography\n• Cultural Heritage Studies`,
},

{
    id: '11',
    title: 'Bachelor of Science in Biotechnology',
    details: `The degree combines biology and technology, focusing on applications in medicine, agriculture, and environmental science, equipping graduates for careers in biotech industries.\n\nCore Subjects:\n• Molecular Biology\n• Genetic Engineering\n• Biochemistry\n• Microbiology\n• Bioprocessing\n• Bioinformatics`,
},

];

export default function DegreeSelectionScreen() {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter degrees based on search query
  const filteredDegrees = degrees.filter((degree) =>
    degree.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.degreeContainer}>
      <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.degreeHeader}>
        <Text style={styles.degreeTitle}>{item.title}</Text>
        <AntDesign name={expandedId === item.id ? 'up' : 'down'} size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      {expandedId === item.id && (
        <View style={styles.degreeDetails}>
          <Text>{item.details}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Degree Selection</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)} // Update search query
      />
      <FlatList
        data={filteredDegrees} // Use filtered degrees
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  degreeContainer: {
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  degreeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align text and icon vertically in the same row
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  degreeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center', // This makes sure the icon is vertically centered
  },
  degreeDetails: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
