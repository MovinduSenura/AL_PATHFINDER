import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import React from "react";

const QuestionsPage = () => {
  return (
    <View className="bg-white h-screen">
      <TouchableOpacity
        onPress={() => router.push("/Questionnaire/rightWrongPage")}
        className="w-[80%] mt-[550px] mx-auto"
      >
        <View className="bg-[#5099B4] py-2.5 rounded-lg">
          <Text className="text-md text-center text-white font-semibold">
            Finish Attempt
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionsPage;
