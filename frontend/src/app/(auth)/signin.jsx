import { router, Redirect } from 'expo-router'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView className="flex justify-center items-center">
        <ScrollView>
            <View >
                <Text></Text>
            </View>
            <TouchableOpacity>
                <Text onPress={() => router.push('/Home')} className="bg-indigo-600 text-white px-8 py-2 rounded-lg">Sign In</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
