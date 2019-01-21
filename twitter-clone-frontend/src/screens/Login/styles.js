import { StyleSheet } from "react-native";
import colors from "../../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  inputContainers: {},
  inputLabels: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  inputs: {
    width: 150,
    height: 30,
    backgroundColor: "#fff"
  },
  titleContainer: {
    marginBottom: 50
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: colors.tintColor
  },
  buttonContainer: {},
  button: {
    width: 120,
    height: 30,
    backgroundColor: colors.tintColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  forgotButton: {
    width: 120,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  forgotText: {},
  buttonGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
