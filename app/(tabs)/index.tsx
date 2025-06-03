import ButtonComponent from "@/components/Button";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [numbers, setNumbers] = useState<string[]>([]);
  return (
    <View style={styles.mainView}>
      <ButtonComponent value="1" action={() => console.log(3)} />
      <ButtonComponent value="2" action={() => console.log(3)} />
      <ButtonComponent value="3" action={() => console.log(3)} />
      <ButtonComponent value="4" action={() => console.log(3)} />
      <ButtonComponent value="5" action={() => console.log(3)} />
      <ButtonComponent value="6" action={() => console.log(3)} />
      <ButtonComponent value="7" action={() => console.log(3)} />
      <ButtonComponent value="8" action={() => console.log(3)} />
      <ButtonComponent value="9" action={() => console.log(3)} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    color: "blue",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
  },
  ButtonView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
