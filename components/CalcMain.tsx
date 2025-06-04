import React from "react";
import { View } from "react-native";

interface CalcMainProps {
  numbers: string[];
}

function CalcMain({ numbers }: CalcMainProps) {
  return <View>{numbers.map((item) => item)}</View>;
}

export default CalcMain;
