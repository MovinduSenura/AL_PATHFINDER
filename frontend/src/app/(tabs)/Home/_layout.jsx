import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{  headerShown: false }} />

<Stack.Screen
        name="consultationHome"
        options={{
          headerShown: true,
          title: "Consultation Service",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />

<Stack.Screen
        name="createAppointment"
        options={{
          headerShown: true,
          title: "Create Appointments",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />

<Stack.Screen
        name="courseselection"
        options={{
          headerShown: true,
          title: "Course Selection",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />

<Stack.Screen
        name="degreeselection"
        options={{
          headerShown: true,
          title: "Degree Selection",
          headerBackTitleVisible: false,
          headerTintColor: "#353333",
          headerTitleStyle: {
            color: "#353333",
            fontWeight: "bold",
          },
        }}
      />

      
        </Stack>
    )
}
export default StackLayout
