import React, { useRef } from 'react';
import { Stack } from "expo-router";
import { View, Text, StyleSheet, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from "../assets/images/minilogo.svg"; // Adjust the path as necessary

const HeaderTitle = () => (
  <View style={styles.headerTitleContainer}>
    <Logo style={styles.logo} />
    <Text style={styles.headerTitleText}>AL PATH FINDER</Text>
  </View>
);

const StackLayout = () => {
  const drawerRef = useRef(null); // Reference to control the drawer

  // Drawer Content
  const renderDrawer = () => (
    <View style={styles.drawerContainer}>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>PROFILE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="ribbon-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>QUIZZES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="book-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>COURSES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="school-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>DEGREES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>NOTIFICATIONS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="people-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>CONSULTATION</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="megaphone-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>ADVERTISEMENTS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="call-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.drawerText}>CONTACT</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={renderDrawer}
    >
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: () => <HeaderTitle />,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: "#76B4D0",
            },
            headerRight: ({ focused }) => (
              <Ionicons
                name="notifications"
                size={25}
                color={focused ? "#000" : "#FFF"}
                style={{ marginRight: 4 }}
                onPress={() => alert('Notifications')}
              />
            ),
            headerLeft: ({ focused }) => (
              <Ionicons
                name="menu"
                size={25}
                color={focused ? "#000" : "#FFF"}
                style={{ marginLeft: 4 }}
                onPress={() => drawerRef.current.openDrawer()} // Open drawer when menu is clicked
              />
            ),
            headerBackVisible: false
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 3,
  },
  headerTitleText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  // Drawer styles
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 20,
  },
  drawerItem: {
    flexDirection: 'row',  // Align icon and text horizontally
    alignItems: 'center',  // Align items vertically centered
    marginBottom: 30,
  },
  icon: {
    marginRight: 20,  // Add some space between the icon and text
  },
  drawerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StackLayout;
