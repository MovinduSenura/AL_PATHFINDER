import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Onboard1 = () => {
    return (
        <SafeAreaView>
            <View className="flex justify-center items-center">
                <Text>ONboard1</Text>
                <Link href={'/onboard2'} className="bg-zinc-600 px-8 py-2 rounded-lg text-white">Continue</Link>
            </View>
        </SafeAreaView>
    );
};

export default Onboard1;
