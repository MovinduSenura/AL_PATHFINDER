import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormFeild from '../../components/FormFeild'; // Importing FormFeild component

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChangeText = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    return (
        <SafeAreaView className="flex-1 justify-center px-4 pt-14 bg-white">
            <View className="w-full mb-6">
                <Text className="text-3xl font-bold text-left mb-4">Sign Up</Text>
            </View>
            {/* Using FormFeild component for each input */}
            <FormFeild
                title="Name"
                value={formData.name}
                onChangeText={(value) => handleChangeText('name', value)}
                otherStyles="mb-4"
                keyboardType="default"
            />
            <FormFeild
                title="Email"
                value={formData.email}
                onChangeText={(value) => handleChangeText('email', value)}
                otherStyles="mb-4"
                keyboardType="email-address"
            />
            <FormFeild
                title="Phone"
                value={formData.phone}
                onChangeText={(value) => handleChangeText('phone', value)}
                otherStyles="mb-4"
                keyboardType="phone-pad"
            />
            <FormFeild
                title="Password"
                value={formData.password}
                onChangeText={(value) => handleChangeText('password', value)}
                otherStyles="mb-4"
                keyboardType="default"
                secureTextEntry={true}
            />
            <FormFeild
                title="Confirm Password"
                value={formData.confirmPassword}
                onChangeText={(value) => handleChangeText('confirmPassword', value)}
                otherStyles="mb-4"
                keyboardType="default"
                secureTextEntry={true}
            />

            {/* Sign Up Button */}
            <TouchableOpacity className="">
                <Text onPress={() => router.push('/signin')} className="bg-[#76B4D0] mt-10 py-4 mb-2 rounded-2xl text-lg text-center font-semibold">Sign Up</Text>
            </TouchableOpacity>

            {/* Navigation to Sign In Page */}
            <View className="flex-row justify-center gap-2 mt-auto mb-10">
                <TouchableOpacity className="mt-32">
                    <Text className="font-semibold">Already have an account?</Text>
                </TouchableOpacity>
                <Link href={'/signin'} className='font-bold text-[#76B4D0]'>Login here.</Link>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
