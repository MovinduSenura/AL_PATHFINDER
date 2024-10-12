import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                    title: "Student Profile",
                    headerBackTitleVisible: false,
                    headerTintColor: "#353333",
                    headerTitleStyle: {
                      color: "#353333",
                      fontWeight: "bold",
                    },
                  }} />
        </Stack>
    )
}
export default StackLayout
