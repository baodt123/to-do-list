import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Task() {
  return (
    <TouchableOpacity className="flex-row bg-white mt-3 mx-5 p-3 rounded-xl">
      <Text className="bg-blue-300 p-2.5 rounded-lg text-white font-bold">
        01
      </Text>
      <Text className="p-2 w-4/5">Lorem Ipsum is simply dummy text of</Text>
    </TouchableOpacity>
  );
}
