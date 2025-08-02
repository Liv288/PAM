import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";

export default function Saldo() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Text style={styles.final}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolor.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },

  Text: {
    fontSize: 44,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 5,
  },

  Text2: {
    fontSize: 44,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 5,
  },

  final: {
    marginTop: 45,
    color: "#3c3c3c",
    textAlign: "center",
  },
});
