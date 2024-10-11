import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import Onboard from '../../assets/images/onboard1.png'; // Assuming you have an SVG logo

const Onboard1 = () => {
    const router = useRouter(); // Hook to programmatically navigate

    const handleAlert = () => {
        Alert.alert(
            "Turn on Notifications",
            "Do you want to Turn on Notifications?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => router.push('/onboard2') // Navigate to onboard2 on "OK"
                }
            ]
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-[#76B4D0]">
            <View className="flex-1">
                <Image source={Onboard} className="-mt-14 mx-auto" />
                <Text className="px-5 text-4xl text-[#353333] font-bold mt-10" style={{ fontFamily: 'serif' }} >Turn On</Text>
                <Text className="px-5 text-4xl text-[#353333] font-bold mb-5" style={{ fontFamily: 'serif' }} >Notifications</Text>
                <Text className="text-left text-2xl mt-2 px-5">
                    Get notified about teachers, counselors and new programs.
                </Text>
            </View>
            <View className="flex-col items-center mb-10">
                <TouchableOpacity onPress={handleAlert} className="w-80 ">
                    <View className="bg-white px-8 py-3 mb-2 rounded-2xl">
                        <Text className="text-lg text-center font-semibold">Continue</Text>
                    </View>
                </TouchableOpacity>

                <Link href={'/onboard2'} className="text-white text-center font-bold hover:underline">
                    Not Now
                </Link>
            </View>
        </SafeAreaView>
    );
};

export default Onboard1;
