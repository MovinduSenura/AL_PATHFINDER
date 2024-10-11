import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
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
        <SafeAreaView className="flex-1 bg-white">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24, paddingTop: 56 }}>
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
                    <TouchableOpacity onPress={() => router.push('/signin')} className="w-full mt-10">
                        <View className="bg-[#76B4D0] py-4 rounded-2xl">
                            <Text className="text-lg text-center font-semibold">
                                Sign Up
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Navigation to Sign In Page */}
                    <View className="flex-row justify-center gap-2 mt-auto mb-10">
                        <TouchableOpacity className="mt-32">
                            <Text className="font-semibold">Already have an account?</Text>
                        </TouchableOpacity>
                        <Link href={'/signin'} className='font-bold text-[#76B4D0]'>Login here.</Link>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignUp;
