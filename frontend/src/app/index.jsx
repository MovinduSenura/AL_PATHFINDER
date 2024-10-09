import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center h-screen">
      <Text className="text-3xl font-bold text-[#76B4D0]">AL PATHFINDER</Text>
      <StatusBar style="auto" />
    </View>
  );
}
