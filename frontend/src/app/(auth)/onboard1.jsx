import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Onboard from '../../assets/images/onboard1.png'; // Assuming you have an SVG logo

const Onboard1 = () => {
    return (
        <SafeAreaView className="flex-1 bg-[#76B4D0]">
            <View className="flex-1">
                <Image source={Onboard} className="-mt-10 mx-auto" />
                <Text className="px-5 text-4xl font-bold mt-10" style={{fontFamily: 'serif'}} >Turn On</Text>
                <Text className="px-5 text-4xl font-bold mb-5" style={{fontFamily: 'serif'}} >Notifications</Text>
                <Text className="text-left text-xl text-gray-600 mt-2 px-5">
                    Get notified about teachers, counselors and new programs.
                </Text>
            </View>
            <View className="flex-col items-center mb-10">
                <TouchableOpacity onPress={() => {alert("Do you want to Turn on Notifications")}} className="w-80">
                    <Text className="bg-white px-8 py-3 mb-2 rounded-2xl text-lg text-center font-semibold">Continue</Text>
                </TouchableOpacity>
                <Link href={'/onboard2'} className="text-white text-center font-bold hover:underline">
                    Not Now
                </Link>
            </View>
        </SafeAreaView>
    );
};

export default Onboard1;
