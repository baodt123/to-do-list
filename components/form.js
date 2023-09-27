import { Text, View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import React, { useState } from "react";

export default function Form(props) {
  const [task, setTask] = useState("");
  const handleTask = () => {
    if (task.length === 0) {
      alert("Enter your task!");
      return false;
    }
    props.onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };
  return (
    <View className="flex-row items-center">
      <View className="bg-white ml-3 p-3 rounded-3xl border-2 border-cyan-500 flex-1">
        <TextInput
          value={task}
          placeholder="Your task?"
          onChangeText={(text) => setTask(text)}
        />
      </View>
      <TouchableOpacity
        className="bg-blue-500 m-3 w-14 h-14 justify-center rounded-full"
        onPress={handleTask}>
        <Text className="text-white text-3xl text-center">+</Text>
      </TouchableOpacity>
    </View>
  );
}
