import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";

export default function Saldo() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Seção Cofrinho / Investido */}
      <View style={styles.section}>
        <View style={styles.card}>
          <View style={styles.linhaTexto}>
            <View style={[styles.bolinha, { backgroundColor: "red" }]} />
            <Text style={styles.label}>INCOMES</Text>
          </View>
          <Text style={styles.Text}>$267</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.card}>
          <View style={styles.linhaTexto}>
            <View style={styles.bolinha} />
            <Text style={styles.label}>EXPENSES</Text>
          </View>
          <Text style={styles.Text2}>$255</Text>
        </View>
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

  // COFRINHO / INVESTIDO
  section: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  card: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },

  linhaTexto: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  bolinha: {
    width: 15,
    height: 15,
    backgroundColor: "black",
    borderRadius: 11,
    marginRight: 6,
  },

  label: {
    fontSize: 23,
  },

  divisor: {
    marginTop: 5,
    width: 1,
    height: 100,
    backgroundColor: "black",
    marginHorizontal: 10,
  },
});
