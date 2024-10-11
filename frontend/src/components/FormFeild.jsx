import { View, Text, TextInput } from "react-native";

const FormFeild = () => {
    return (
        <View className="space-y-2">
            <Text className="text-base text-gray-100">FormFeild</Text>

            <View className="border-2 border-black w-full h-16 px-4 bg-black rounded-2xl focus:border-2 focus:border-indigo-600">
                <TextInput className="flex-1 text-white px-10 py-2 font-semibold text-base" />
            </View>
        </View>
    );
};

export default FormFeild;
