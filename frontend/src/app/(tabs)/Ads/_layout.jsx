import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack>
            {/* <Stack.Screen
                name="index"
                options={{  headerShown: false }} />
                 <Stack.Screen
                name="displayads"
                options={{  headerShown: false }} /> */}

<Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Advertisments",
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
