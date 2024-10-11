import { Stack } from "expo-router";
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from "../assets/images/minilogo.svg"; // Adjust the path as necessary

const HeaderTitle = () => (
  <View style={styles.headerTitleContainer}>
    <Logo style={styles.logo} />
    <Text style={styles.headerTitleText}>AL PATH FINDER</Text>
  </View>
);

const StackLayout = () => {
  return (
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
              onPress={() => alert('Menu')}
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
        }} />
    </Stack>
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
    marginTop: 3
  },
  headerTitleText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default StackLayout;
