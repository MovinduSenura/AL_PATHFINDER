import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen 
                name="onboard1"
                options={{
                    headerShown: false
                }}/>
                <Stack.Screen 
                name="onboard2"
                options={{
                    headerShown: false
                }}/>
                <Stack.Screen 
                name="signin"
                options={{
                    headerShown: false
                }}/>
                <Stack.Screen 
                name="signup"
                options={{
                    headerShown: false
                }}/>
            </Stack>
        </>
    );
};

export default AuthLayout;
