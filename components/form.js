import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function Form() {
    const handleTask = () => {
        alert("hello?")
    }
  return (
    <View className="flex-row items-center">
      <View className="bg-white ml-3 p-3 rounded-3xl border-2 border-cyan-500 flex-1">
        <TextInput className="font-bold" placeholder="Your task?" />
      </View>
      <TouchableOpacity
        className="bg-blue-500 m-3 w-14 h-14 justify-center rounded-full"
        onPress={() => }>
        <Text className="text-white text-3xl text-center">+</Text>
      </TouchableOpacity>
    </View>
  );
}
