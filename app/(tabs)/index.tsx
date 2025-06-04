import ButtonComponent from "@/components/Button";
import CalcMain from "@/components/CalcMain";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function HomeScreen() {
  const [numbers, setNumbers] = useState<string[]>([]);
  return (
    <View style={styles.mainView}>
      <CalcMain numbers={numbers} />
      <View style={styles.KeyboardWrapper}>
        <View style={styles.ButtonGroup}>
          <ButtonComponent value="1" action={() => console.log(3)} />
          <ButtonComponent value="2" action={() => console.log(3)} />
          <ButtonComponent value="3" action={() => console.log(3)} />
        </View>
        <View style={styles.ButtonGroup}>
          <ButtonComponent value="4" action={() => console.log(3)} />
          <ButtonComponent value="5" action={() => console.log(3)} />
          <ButtonComponent value="6" action={() => console.log(3)} />
        </View>
        <View style={styles.ButtonGroup}>
          <ButtonComponent value="7" action={() => console.log(3)} />
          <ButtonComponent value="8" action={() => console.log(3)} />
          <ButtonComponent value="9" action={() => console.log(3)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "red",
    color: "blue",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
  },
  KeyboardWrapper: {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 60,
    width: deviceWidth,
    height: deviceHeight,
  },
  ButtonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  ButtonView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
