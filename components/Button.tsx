import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  value: string;
  action: (value: string) => void;
}

export default function ButtonComponent({ value, action }: ButtonProps) {
  return (
    <View style={style.ButtonView}>
      <Pressable
        style={({ pressed }) => [
          style.ButtonStyle,
          pressed && style.ButtonPressed,
        ]}
      >
        <Text style={style.TextStyle}>{value}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  ButtonView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
  },
  ButtonPressed: {
    backgroundColor: "#0010AA",
  },
  ButtonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#0010FF",
    borderRadius: 100,
  },

  TextStyle: {
    color: "white",
    fontSize: 20,
  },
});
