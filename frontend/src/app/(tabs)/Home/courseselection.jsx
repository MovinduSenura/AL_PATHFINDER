import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Using AntDesign for the arrow icons

const courses = [
  {
    id: '1',
    title: 'British Foundation Diploma for Higher Education Studies',
    details: `The OTHM Level 3 Foundation Diploma for Higher Education Studies provides learners an entry route to UK and international university courses. On Successful completion of the this programme learners are provided with opportunity to progress to further study or employment.\n\nMandatory units:\n• Academic English and Study Skills\n• Foundation Mathematics\n• Foundation Computing\n• Society and Culture\n• Introduction to Business\n• Foundation Accounting and Economics`,
  },
  {
    id: '2',
    title: 'Higher Diploma in Business Studies \nand Management',
    details: `This diploma offers a comprehensive introduction to core management principles and leadership techniques. Graduates will be prepared for leadership roles in business environments or pursue further education.\n\nMandatory units:\n• Organizational Behavior\n• Strategic Management\n• Marketing Essentials\n• Financial Management\n• Business Law\n• Human Resource Management`,
  },
  {
    id: '3',
    title: 'Higher Diploma in Digital Marketing',
    details: `The Higher Diploma in Digital Marketing equips students with knowledge in social media, SEO, content creation, and marketing strategy. Ideal for careers in digital marketing or further academic progression.\n\nMandatory units:\n• Digital Marketing Strategy\n• Social Media Marketing\n• Content Creation and Copywriting\n• SEO Fundamentals\n• Data Analytics for Marketers\n• Online Advertising`,
  },
  {
    id: '4',
    title: 'Diploma in Hospitality and Tourism Management',
    details: `This diploma focuses on the skills necessary for managing businesses in the hospitality and tourism industry, from hotels to event planning. Graduates can pursue careers in tourism or continue their education.\n\nMandatory units:\n• Hospitality Operations\n• Tourism and Global Issues\n• Event Planning and Management\n• Customer Service Excellence\n• Marketing in Hospitality\n• Financial Management in Tourism`,
  },
  {
    id: '5',
    title: 'Higher Diploma in Computer Science',
    details: `This diploma introduces students to core areas of computer science, including programming, algorithms, and data structures, providing a pathway into software development, IT, or further study.\n\nMandatory units:\n• Introduction to Programming\n• Data Structures and Algorithms\n• Databases and SQL\n• Operating Systems\n• Web Development\n• Software Engineering`,
  },
  {
    id: '6',
    title: 'Diploma in Early Childhood Education',
    details: `This diploma prepares students to work as educators and caregivers for young children, focusing on child development, curriculum design, and inclusive education practices.\n\nMandatory units:\n• Child Growth and Development\n• Curriculum Design for Early Childhood\n• Inclusive Education\n• Early Childhood Psychology\n• Health and Safety in Childcare\n• Teaching Practicum`,
  },
  {
    id: '7',
    title: 'Higher Diploma in Financial \nTechnology (FinTech)',
    details: `This course covers emerging financial technologies, including blockchain, mobile payments, and AI in finance. Graduates can pursue careers in the rapidly evolving FinTech industry.\n\nMandatory units:\n• Introduction to FinTech\n• Blockchain and Cryptocurrencies\n• AI in Finance\n• Mobile Payment Solutions\n• Risk and Regulation in FinTech\n• Data Science for Finance`,
  },
  {
    id: '8',
    title: 'Diploma in Graphic Design \nand Multimedia',
    details: `A comprehensive course that equips students with practical skills in graphic design, video editing, and multimedia production. Perfect for those aspiring to work in creative industries.\n\nMandatory units:\n• Fundamentals of Graphic Design\n• Digital Illustration\n• Video Production and Editing\n• Typography\n• Branding and Advertising\n• Portfolio Development`,
  },
  {
    id: '9',
    title: 'Higher Diploma in Cybersecurity',
    details: `This diploma provides essential knowledge in information security, ethical hacking, and digital forensics. It prepares students for careers in cybersecurity or advanced studies.\n\nMandatory units:\n• Introduction to Cybersecurity\n• Network Security\n• Ethical Hacking\n• Cryptography\n• Incident Response and Digital Forensics\n• Cybersecurity Law and Ethics`,
  },
  {
    id: '10',
    title: 'Higher Diploma in Artificial\nIntelligence and Machine Learning',
    details: `This advanced diploma teaches students the fundamentals of AI, machine learning algorithms, and their applications in various industries. Graduates are prepared for roles in data science or further academic research.\n\nMandatory units:\n• Introduction to AI\n• Machine Learning Algorithms\n• Deep Learning\n• Natural Language Processing\n• AI Ethics and Governance\n• Data Visualization and Analysis`,
  },
];

export default function CourseSelectionScreen() {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.courseContainer}>
      <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.courseHeader}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <AntDesign name={expandedId === item.id ? 'up' : 'down'} size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      {expandedId === item.id && (
        <View style={styles.courseDetails}>
          <Text>{item.details}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Course Selection</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)} // Update search query
      />
      <FlatList
        data={filteredCourses} // Use filtered courses
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
  courseContainer: {
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align text and icon vertically in the same row
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center', // This makes sure the icon is vertically centered
  },
  courseDetails: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
