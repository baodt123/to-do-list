import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Task from "../components/task";
import Form from "../components/form";

export default function Home() {
  return (
    <View className="flex-1 bg-sky-100">
      <View className="flex-1">
        <View className="mt-10 mx-4 p-3">
          <Text className="text-blue-400 text-3xl font-bold">Todo List</Text>
        </View>
        <ScrollView className=" flex-col">
          <Task />
          <Task />
        </ScrollView>
      </View>

      <Form/>
    </View>
  );
}
