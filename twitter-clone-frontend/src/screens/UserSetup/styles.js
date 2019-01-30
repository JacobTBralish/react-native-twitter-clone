import { StyleSheet } from "react-native";
import colors from "../../../Constants/Colors";

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: colors.tintColor
  },

  input: {
    width: 150,
    height: 30,
    margin: 10,
    padding: 8,
    color: "black"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 8
  }
});

export default styles;
