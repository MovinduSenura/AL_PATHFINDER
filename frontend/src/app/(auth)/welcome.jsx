import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Logo from '../../assets/images/mainlogo.svg';
import CodeWave from '../../assets/images/codewave.svg';

const Welcome = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboard1');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-1 justify-center items-center">
        <Logo width={350} height={350} />
      </View>
      <Text className="text-center font-bold -mb-4 ml-4">from</Text>
      <View className="flex-row items-center justify-center mb-5">
        <CodeWave width={80} height={80} className="mr-2 text-red-600" />
        <Text className="text-center font-semibold">CodeWave</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
