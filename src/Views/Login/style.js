import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get("screen").width;

const style = StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  entradas: {
    width: largura * 0.8,
    textAlign: "center",
    marginTop: 40,
    fontSize: 30,
  },
  entrar: {
    justifyContent: "center",
    marginBottom: 50,
  },
});

export default style;
