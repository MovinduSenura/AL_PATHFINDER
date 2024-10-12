import { View, Text, TouchableOpacity } from 'react-native'
import { router } from "expo-router";
import React from 'react'

const RightWrongPage = () => {
  return (
    <View className="bg-white h-screen">
      {/* <Text>R</Text> */}
      <TouchableOpacity
        onPress={() => router.push("/Questionnaire/allMarks")}
        className="w-[80%] mt-[550px] mx-auto"
      >
        <View className="bg-[#5099B4] py-2.5 rounded-lg">
          <Text className="text-md text-center text-white font-semibold">
            View All Quizzes
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RightWrongPage