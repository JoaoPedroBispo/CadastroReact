//StyleSheet - tudo estilo
import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#FFFAF0",
  },

  Title: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    marginTop: "3%",
    marginBottom: "3%",
    color: "black",
  },

  Input: {
    backgroundColor: "white",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "3%",
    borderRadius: 15,
    borderWidth: 2,
  },

  button: {
    margin: 20,
    height: 40,
    width: 270,
    borderRadius: 100,
    alignItems: "center",
    align: "center",
    color: "black",
    borderWidth: 2,
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "white",
  },

  TextInfo: {
    fontWeight: "bold",
    margin: 25,
    marginBottom: "2%",
    fontWeight: "400",
  },
});

export default Styles;
