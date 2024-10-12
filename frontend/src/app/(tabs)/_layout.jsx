import React from 'react';
import { Tabs } from "expo-router";
import { Image, Platform } from 'react-native';
import HomeIcon from "../../assets/images/home.png";
import AdvertiseIcon from "../../assets/images/advertise.png";
import ProfileIcon from "../../assets/images/profile.png";
import QuestionnaireIcon from "../../assets/images/questionnaire.png";

export default TabsLayout = () => {
  return (
    <Tabs
      className="flex justify-center items-center"
      screenOptions={{
        tabBarActiveTintColor: "#4A4E5B",
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 77,  // Adjust height for iOS if needed
          backgroundColor: "#76B4D0",
          paddingBottom: Platform.OS === 'ios' ? 20 : 5,  // Adjust padding for safe area
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 5,
          marginTop: -10
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeIcon}
              style={{
                width: 40,  // Scale icon sizes to be consistent
                height: 40,
                tintColor: focused ? "#4A4E5B" : "#FFF",
                resizeMode: 'contain'  // Ensure images don't stretch
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Ads"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={AdvertiseIcon}
              style={{
                width: 31,
                height: 31,
                tintColor: focused ? "#4A4E5B" : "#FFF",
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Skill Test"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={QuestionnaireIcon}
              style={{
                width: 27,
                height: 27,
                tintColor: focused ? "#4A4E5B" : "#FFF",
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={ProfileIcon}
              style={{
                width: 42,  
                height: 42,
                tintColor: focused ? "#4A4E5B" : "#FFF",
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};
