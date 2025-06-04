import ButtonComponent from "@/components/Button";
import CalcMain from "@/components/CalcMain";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

function Calculate(numbers: (string | number)[]) {
  let result = 0;
  let symbol;
  const calc = (numbers) => {
    numbers.forEach((number, index) => {
      if (typeof number === "string") {
        symbol = number;
        switch (symbol) {
          case "-":
            const temp = numbers[index - 1] - numbers[index + 1];
            result = temp;
            calc(numbers.slice(3));
            break;
          case "+":
            result += numbers[index - 1] + numbers[index + 1];
            break;
        }
      }
    });
    console.log(result);
  };
  calc(numbers);
}

export default function HomeScreen() {
  const [numbers, setNumbers] = useState<string[]>([]);
  return (
    <View style={styles.mainView}>
      <View style={styles.CalcViewStyle}>
        <CalcMain numbers={numbers} />
      </View>
      <View style={styles.KeyboardWrapper}>
        <View style={styles.ButtonGroup}>
          <ButtonComponent
            value={1}
            action={() => setNumbers((prev) => [...prev, "1"])}
          />
          <ButtonComponent
            value={2}
            action={() => setNumbers((prev) => [...prev, "2"])}
          />
          <ButtonComponent
            value={3}
            action={() => setNumbers((prev) => [...prev, "3"])}
          />
        </View>
        <View style={styles.ButtonGroup}>
          <ButtonComponent
            value={4}
            action={() => setNumbers((prev) => [...prev, "4"])}
          />
          <ButtonComponent
            value={5}
            action={() => setNumbers((prev) => [...prev, "5"])}
          />
          <ButtonComponent
            value={6}
            action={() => setNumbers((prev) => [...prev, "6"])}
          />
        </View>
        <View style={styles.ButtonGroup}>
          <ButtonComponent
            value={7}
            action={() => setNumbers((prev) => [...prev, "7"])}
          />
          <ButtonComponent
            value={8}
            action={() => setNumbers((prev) => [...prev, "8"])}
          />
          <ButtonComponent
            value={9}
            action={() => setNumbers((prev) => [...prev, "9"])}
          />
        </View>
        <View style={styles.ButtonGroup}>
          <ButtonComponent
            value="+"
            action={() => setNumbers((prev) => [...prev, "+"])}
          />
          <ButtonComponent
            value="-"
            action={() => setNumbers((prev) => [...prev, "-"])}
          />
          <ButtonComponent value="=" action={() => Calculate(numbers)} />
        </View>
        <View style={styles.ButtonGroup}>
          <ButtonComponent value="C" action={() => setNumbers([])} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    paddingVertical: 40,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  CalcViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  KeyboardWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: "auto",
    width: deviceWidth,
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
