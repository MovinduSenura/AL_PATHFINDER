import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, Modal, TextInput, Button, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Card, Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

const DiplomaAds = () => (
  <FlatList
    data={diplomaAdsData}
    renderItem={({ item }) => <AdCard ad={item} />}
    keyExtractor={(item) => item.id}
  />
);

const ClassAds = () => (
  <FlatList
    data={classAdsData}
    renderItem={({ item }) => <AdCard ad={item} />}
    keyExtractor={(item) => item.id}
  />
);

const renderScene = SceneMap({
  diploma: DiplomaAds,
  class: ClassAds,
});

const AdvertisementScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'diploma', title: 'Diploma Ads' },
    { key: 'class', title: 'Class Ads' },
  ]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Advertisements</Text> */}
      <View style={{ flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'gray' }}
              style={{ backgroundColor: 'white' }}
              labelStyle={{ color: 'black', fontWeight: 'bold' }}
            />
          )}
        />
      </View>
    </View>
  );
};

const AdCard = ({ ad }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact Number:', contactNumber);
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card>
        <Card.Title>{ad.title}</Card.Title>
        <Card.Divider />
        <Image source={ad.image} style={styles.image} />
        <View style={styles.adInfo}>
          <Text>{ad.description}</Text>
          <View style={styles.iconRow}>
            <Text style={{ fontWeight: '600' }}>📧 {ad.phone}</Text>
          </View>
          <View style={styles.iconRow}>
            <Text style={{ fontWeight: '600' }}>📞 {ad.email}</Text>
          </View>
          <View style={styles.iconRow}>
            <Text style={{ fontWeight: '600' }}>🏷️ Type: {ad.classType}</Text>
          </View>
          <View style={styles.iconRow}>
            <Text style={{ fontWeight: '600' }}>📍 Location: {ad.location}</Text>
          </View>
          <View style={styles.iconRow}>
            <Text style={{ fontWeight: '600' }}>👨‍🏫 Conducted By: {ad.conductedBy}</Text>
          </View>
          <View style={styles.iconRow}>
            <Text style={{ fontWeight: '600' }}>💰 Fee: {ad.courseFee}</Text>
          </View>
        </View>
      </Card>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>If you like to join this,                         Fill these details:</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              value={contactNumber}
              onChangeText={setContactNumber}
              keyboardType="phone-pad"
            />
           <TouchableOpacity onPress={handleSubmit} className="w-[80%] mt-4 mx-auto">
  <View className="bg-[#5099B4] py-2.5 rounded-lg">
    <Text className="text-md text-center text-white font-semibold">
      Submit
    </Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => setModalVisible(false)} className="w-[80%] mt-4 mx-auto">
  <View className="bg-[#5099B4] py-2.5 rounded-lg">
    <Text className="text-md text-center text-white font-semibold">
      Cancel
    </Text>
  </View>
</TouchableOpacity>

          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

// const renderCarouselItem = ({ item }) => (
//   <View style={styles.carouselItem}>
//     <Text>{item.title}</Text>
//     <Text>{item.description}</Text>
//   </View>
// );

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
  carouselItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  adInfo: {
    marginTop: 10,
    alignItems: 'justify',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default AdvertisementScreen;

const diplomaAdsData = [
  { 
    id: '1', 
    title: 'English Language', 
    description: 'Boost your English proficiency with our diploma program, focusing on grammar, vocabulary, and effective communication. Improve your writing, speaking, and listening skills for academic, professional, or personal advancement. This course is ideal for anyone looking to confidently use English in real-world situations.', 
    phone: '0777 695 696', 
    email: 'gayaniliya@gmail.com',
    image: require('../../../assets/images/diplomaEnglish.jpg'),
    classType: 'Group', // New attribute
    location: 'Colombo', // New attribute
    district: 'Colombo', // New attribute
    conductedBy: 'John Doe', // New attribute
    courseFee: 'LKR 30,000' // New attribute
  },
  { 
    id: '2', 
    title: 'Business Management', 
    description: 'Gain essential business management skills with this diploma, including strategic management, leadership, and marketing techniques. Perfect for those aspiring to leadership roles or advancing their career in business.', 
    phone: '0712 345 678', 
    email: 'businesscourse@gmail.com',
    image: require('../../../assets/images/diplomaBusiness.jpg'),
    classType: 'Individual', // New attribute
    location: 'Kandy', // New attribute
    district: 'Kandy', // New attribute
    conductedBy: 'Jane Smith', // New attribute
    courseFee: 'LKR 40,000' // New attribute
  },
  { 
    id: '3', 
    title: 'Digital Marketing', 
    description: 'Master the latest digital marketing techniques, including SEO, social media strategies, and online advertising. Ideal for individuals looking to excel in the fast-paced world of digital marketing.', 
    phone: '0771 234 567', 
    email: 'digitalads@marketing.com',
    image: require('../../../assets/images/diplomaDigital.jpg'),
    classType: 'Online', // New attribute
    location: 'Virtual', // New attribute
    district: 'N/A', // New attribute
    conductedBy: 'Alex Johnson', // New attribute
    courseFee: 'LKR 25,000' // New attribute
  },
  { 
    id: '4', 
    title: 'Hospitality and Tourism Management', 
    description: 'Prepare for a rewarding career in the hospitality and tourism industry. This diploma covers customer service, event management, and global tourism issues, helping you stand out in a competitive field.', 
    phone: '0765 432 198', 
    email: 'hospitality@tourism.com',
    image: require('../../../assets/images/diplomaHotel.jpg'),
    classType: 'Group', // New attribute
    location: 'Galle', // New attribute
    district: 'Galle', // New attribute
    conductedBy: 'Emily White', // New attribute
    courseFee: 'LKR 35,000' // New attribute
  },
  { 
    id: '5', 
    title: 'Graphic Design', 
    description: 'Develop your creativity with this graphic design diploma, covering topics such as digital illustration, typography, and branding. Perfect for aspiring designers looking to build a professional portfolio.', 
    phone: '0755 321 654', 
    email: 'designcourses@creative.com',
    image: require('../../../assets/images/diplomaDesihn.jpg'),
    classType: 'Individual', // New attribute
    location: 'Jaffna', // New attribute
    district: 'Jaffna', // New attribute
    conductedBy: 'Sophia Lee', // New attribute
    courseFee: 'LKR 28,000' // New attribute
  }
];


const classAdsData = [
  { 
    id: '1', 
    title: 'A/L Physics - Theory and Revision', 
    description: 'Master A/L Physics with comprehensive theory and revision classes. Focus on key concepts, past paper discussions, and exam techniques to score your best.',     phone: '0712 345 678', 
    email: 'physicsal@gmail.com',
    image: require('../../../assets/images/physicsclas.jpg'),
    classType: 'Individual',
    location: 'Colombo',
    district: 'Colombo',
    conductedBy: 'Mr. Perera',
    courseFee: 'Rs. 10,000'
  },
  { 
    id: '2', 
    title: 'A/L Chemistry - Complete Course', 
    description: 'Cover all A/L Chemistry syllabus topics with in-depth explanations and practical sessions. Ideal for students aiming for top results in their exams.', 
    phone: '0778 123 456', 
    email: 'chemistrypro@gmail.com',
    image: require('../../../assets/images/chemistryclass.jpeg'),
    classType: 'Group',
    location: 'Kandy',
    district: 'Kandy',
    conductedBy: 'Ms. Silva',
    courseFee: 'Rs. 12,000'
  },
  { 
    id: '3', 
    title: 'A/L Biology - Revision and Papers', 
    description: 'A focused A/L Biology revision course designed to help you understand complex concepts and practice with past papers to ensure you are exam ready.', 
    phone: '0756 987 654', 
    email: 'biologyrev@gmail.com',
    image: require('../../../assets/images/paperclass.jpeg'),
    classType: 'Online',
    location: 'Virtual',
    district: 'N/A',
    conductedBy: 'Dr. Fernando',
    courseFee: 'Rs. 8,000'
  },
  { 
    id: '4', 
    title: 'A/L Economics - Theory and Practice', 
    description: 'A focused A/L Biology revision course designed to help you understand complex concepts and practice with past papers to ensure you are exam ready.', 
    phone: '0723 456 789', 
    email: 'economicsal@gmail.com',
    image: require('../../../assets/images/econ.jpg'),
    classType: 'Group',
    location: 'Galle',
    district: 'Galle',
    conductedBy: 'Mr. Wijesinghe',
    courseFee: 'Rs. 9,000'
  },
  { 
    id: '5', 
    title: 'A/L Mathematics - Full Syllabus', 
    description: 'Learn A/L Mathematics with our expert guidance covering Pure and Applied Math. Structured lessons, model paper discussions, and exam tips provided.', 
    phone: '0771 234 567', 
    email: 'mathsALmaster@gmail.com',
    image: require('../../../assets/images/mathsclasss.png'),
    classType: 'Individual',
    location: 'Negombo',
    district: 'Negombo',
    conductedBy: 'Ms. Kumari',
    courseFee: 'Rs. 11,000'
  }
];


