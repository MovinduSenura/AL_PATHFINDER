import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router, Link } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormFeild from '../../components/FormFeild';
import Signin from '../../assets/images/signinphoto.png'; 

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
          <View className="w-full mb-6 flex">
            <Text className="text-3xl font-bold text-[#353333] text-left mb-4">Sign In to Continue!</Text>
            {/* <Image source={Signin} className="my-3" /> */}
          </View>
          <View className="w-full mb-6 flex justify-center items-center">
            {/* <Text className="text-3xl font-bold text-[#353333] text-left mb-4">Sign In to Continue!</Text> */}
            <Image source={Signin} className="my-3" />
          </View>
          
          {/* Using FormFeild component for email and password input */}
          <FormFeild
            title="Email or Phone"
            value={formData.email}
            onChangeText={(value) => handleChangeText('email', value)}
            otherStyles="mb-4"
            keyboardType="email-address"
          />
          <FormFeild
            title="Password"
            value={formData.password}
            onChangeText={(value) => handleChangeText('password', value)}
            otherStyles="mb-4"
            keyboardType="default"
            secureTextEntry={true}
          />

          {/* Forgot Password and Sign In Button */}
          <View className="mt-10">
            <TouchableOpacity>
              <Text className="font-semibold text-center text-[#424242] mb-5">Forgot password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => router.push('/Home')}>
              <View className="bg-[#76B4D0] py-4 rounded-2xl">
                <Text className="text-lg text-center font-semibold">Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Navigation to Sign Up Page */}
          <View className="flex-row justify-center gap-2 mt-auto mb-10">
            <Text className="font-semibold">No Account yet?</Text>
            <Link href={'/signup'} className='font-bold text-[#76B4D0]'>Register here.</Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
