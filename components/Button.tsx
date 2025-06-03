import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface ButtonProps {
  value: string;
  action: (value: string) => void;
}

export default function ButtonComponent({ value, action }: ButtonProps) {
  return (
    <View style={style.ButtonView}>
      <Pressable style={style.ButtonStyle}>{value}</Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  ButtonView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "white",
  },
});
