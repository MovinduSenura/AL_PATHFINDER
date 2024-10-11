import { Tabs } from "expo-router";
import { Image } from 'react-native';
import HomeIcon from "../../assets/images/home.png";
import AdvertiseIcon from "../../assets/images/advertise.png";
import ProfileIcon from "../../assets/images/profile.png";
import QuestionnaireIcon from "../../assets/images/questionnaire.png";

export default TabsLayout = () => {
  return (
    <Tabs
      className="flex justify-center items-center"
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
          height: 77,
          backgroundColor: "#76B4D0",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          marginBottom: 5
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
              style={{ width: 40, height: 40, tintColor: focused ? "#000" : "#FFF" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Advertise"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={AdvertiseIcon}
              style={{ width: 35, height: 35, tintColor: focused ? "#000" : "#FFF" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Questionnaire"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={QuestionnaireIcon}
              style={{ width: 30, height: 30, tintColor: focused ? "#000" : "#FFF" }}
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
              style={{ width: 50, height: 50, tintColor: focused ? "#000" : "#FFF" }}
            />
          ),
        }}
      />
    </Tabs>
  );
};
