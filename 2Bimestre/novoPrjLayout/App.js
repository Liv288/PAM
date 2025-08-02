import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header.js";
import Saldo from "./components/Saldo.js";
import Descricao from "./components/Descricao.js";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header />

      <Saldo />

      <Descricao />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },

  header: {
    backgroundColor: "red",
    margin: 0,
    padding: 0,
    width: "100%",
    height: 300,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  linha: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },

  linhaImg: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 300,
    height: 10,
    marginTop: 20,
    zIndex: 1,
  },

  conteudo: {
    backgroundColor: "white",
    width: 300,
    height: 115,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
  },

  linha2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 300,
    height: 80,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
  },

  coluna: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    fontSize: 18,
    color: "#3c3c3c",
    marginBottom: 5,
  },

  valor: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  colunaDois: {
    backgroundColor: "white",
    height: 72,
    width: 90,
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  linha3: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
    height: 20,
    marginTop: -10,
  },

  coluna3: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textoColuna: {
    color: "white",
    fontSize: 16,
    padding: "auto",
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
