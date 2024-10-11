import { Redirect, useNavigation, router } from "expo-router";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
// import { useGlobalContext } from "../con"

const Welcome = () => {

  // const {isLoading , isLoggedIn } = useGloba
  return (
    <SafeAreaView>
      <View className="h-screen flex justify-center items-center">
        <Text>Welcome</Text>
        <TouchableOpacity className="bg-indigo-600 rounded-lg px-8 py-2"  onPress={() => router.push('/onboard1')} >
          <Text className="text-white">Go to Nav</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Welcome