import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Choose Your Quiz",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="questionsPage"
        options={{
          headerShown: true,
          title: "(Stream Name) Quiz",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="rightWrongPage"
        options={{
          headerShown: true,
          title: "Check Quiz Marks",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="allMarks"
        options={{
          headerShown: true,
          title: "My Results",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
};
export default StackLayout;
