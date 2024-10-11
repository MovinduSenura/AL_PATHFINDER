import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Onboard2 = () => {
    return (
        <SafeAreaView>
            <View className="flex justify-center items-center">
                <Text>Onboard2</Text>
                <Link href={'/signup'} className="bg-red-600 px-8 py-2 rounded-lg text-white">Get Started</Link>
            </View>
        </SafeAreaView>
    );
};

export default Onboard2;
