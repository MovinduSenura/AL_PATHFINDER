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
          title: "Physical Science Skill Test",
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
      <Stack.Screen
        name="questionPageArt"
        options={{
          headerShown: true,
          title: "Art Skill Test",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />
        <Stack.Screen
        name="questionPageBio"
        options={{
          headerShown: true,
          title: "Bio Skill Test",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />
             <Stack.Screen
        name="questionPageCmz"
        options={{
          headerShown: true,
          title: "Commerce Skill Test",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />
             <Stack.Screen
        name="questionPagetechnology"
        options={{
          headerShown: true,
          title: "Technology Skill Test",
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
