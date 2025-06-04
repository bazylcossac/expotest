import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface CalcMainProps {
  numbers: string[];
}

const deviceWidth = Dimensions.get("window").width;

function CalcMain({ numbers }: CalcMainProps) {
  return (
    <View style={styles.ViewStyle}>
      {numbers.map((item, i) => (
        <Text key={i} style={styles.textStyle}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: deviceWidth,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 4,
    color: "white",
  },
});

export default CalcMain;
