import React, { useState } from 'react';
import { router, Link } from 'expo-router';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
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
    <SafeAreaView className="flex-1 justify-center px-4 pt-14 bg-white">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="w-full mb-6 flex justify-center items-center">
          <Text className="text-3xl font-bold text-left mb-4">Sign In to Continue!</Text>
          <Image source={Signin} className="my-3" />
        </View>
        <FormFeild
          title="Email"
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

        <View className="">
          <TouchableOpacity>
            <Text className="font-semibold text-center mt-10 -mb-5">Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="">
            <Text onPress={() => router.push('/Home')} className="bg-[#76B4D0] mt-10 py-4 mb-2 rounded-2xl text-lg text-center font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center gap-2 mt-auto mb-10">
          <TouchableOpacity className="mt-32">
            <Text className="font-semibold">No Account yet?</Text>
          </TouchableOpacity>
          <Link href={'/signup'} className='font-bold text-[#76B4D0]'>Register here.</Link>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
