import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import React, { useState } from "react";
import Task from "../components/task";
import Form from "../components/form";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert('Alert', 'Delete?', [
        {
          text: 'OK',
          onPress: () => {
            let tmp = [...taskList];
            tmp.splice(index,1);
            setTaskList(tmp);
          },
        },
        {text: 'Cancel', onPress: () => {}},
      ]);
  };
  return (
    <View className="flex-1 bg-sky-100">
      <View className="flex-1">
        <View className="mt-10 mx-4 p-3">
          <Text className="text-blue-400 text-3xl font-bold">Todo List</Text>
        </View>
        <ScrollView className=" flex-col">
          {taskList.map((item, index) => {
            return (
              <Task
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>

      <Form onAddTask={handleAddTask} />
    </View>
  );
}
