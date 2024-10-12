import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import TreeGraphic from "../../assets/images/tree.png"; // Assuming you have an SVG tree graphic

const Onboard2 = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Image source={TreeGraphic} width={150} height={150} />
        <Text
          className="text-[27px] text-[#353333] font-semibold mt-4 text-center"
          style={{ fontFamily: "serif" }}
        >
          Welcome to AL Path Finder!
        </Text>
        <Text className="text-center text-lg text-[#908E8E] mt-10">
          Elevate your experience with our services and facilities. Let's embark
          on a journey to intelligent learning.
        </Text>
      </View>
      <View className="flex-col items-center mb-10">
        <Text className="text-center text-[#908E8E] font-semibold mb-2 text-xl">
          Tap to learn more...
        </Text>

        {/* Wrap Link in a View for rounded corners */}
        {/* <View className="bg-[#76B4D0] w-80 rounded-2xl">
          <Link href={'/signup'} className=" text-lg text-center font-semibold py-3">
            Get Started
          </Link>
        </View> */}
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          className="w-80"
        >
          <View className="bg-[#76B4D0] px-8 py-3 mb-2 rounded-2xl">
            <Text className="text-lg text-center font-semibold">Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboard2;
