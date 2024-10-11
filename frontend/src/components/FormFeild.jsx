import React from 'react';
import { View, Text, TextInput } from 'react-native';

const FormFeild = ({ title, value, onChangeText, otherStyles, keyboardType, secureTextEntry }) => {
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <View className="w-full h-16 px-4 bg-gray-200 rounded-2xl focus:border-2 focus:border-indigo-600">
                <TextInput
                    value={value}
                    placeholder={title}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    className="flex-1 text-white ps-3 py-2 font-semibold text-base"
                />
            </View>
        </View>
    );
};

export default FormFeild;
