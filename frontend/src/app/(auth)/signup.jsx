import { router } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
    return (
        <SafeAreaView className="flex justify-center items-center">
            <ScrollView>
                <View >
                    <Text></Text>
                </View>
                <TouchableOpacity>
                    <Text onPress={() => router.push('/signin')} className="bg-indigo-600 text-white px-8 py-2 rounded-lg">Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
