import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Task(props) {
  const {number} = props;
  const numberText = number < 10 ? `0${number}` : number;
  const style = "p-2.5 rounded-lg text-white font-bold";
  const itemBg = number % 2 === 0 ? style + " bg-blue-300" : style + " bg-green-300";
  return (
    <TouchableOpacity className="flex-row bg-white mt-3 mx-5 p-3 rounded-xl" onPress={props.onDeleteTask}>
      <Text className={itemBg}>
        {numberText}
      </Text>
      <Text className="p-2 w-4/5">{props.title}</Text>
    </TouchableOpacity>
  );
}
