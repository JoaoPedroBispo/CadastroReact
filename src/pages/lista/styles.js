import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Principal: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: "5%",
  },

  Cor: {
    backgroundColor: "white",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 2,
  },

  Text: {
    marginLeft: "10%",
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: "2%",
    marginLeft: "2%",
    marginBottom: "2%",
  },

  textdel: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 100,
    borderWidth: 1,
    margin: "5%",
    height: 30,
    marginLeft: "15%",
    marginRight: "15%",
    textAlign: "center",
    alignItems: "center",
    align: "center",
    justifyContent: "center",
  },
});

export default Styles;
