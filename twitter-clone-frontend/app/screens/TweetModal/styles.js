import { StyleSheet } from "react-native";
import color from "../../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  buttonBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    alignItems: "center"
  },
  buttonCluster: {
    flexDirection: "row",
    marginRight: 10
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  input: {
    fontSize: 18
  },
  closeButton: {
    color: color.tintColor,
    height: 32,
    width: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  draftsButton: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    width: 80
  },
  tweetButton: {
    height: 32,
    width: 80,
    borderRadius: 25,
    backgroundColor: color.tintColor,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5
  },
  tweetText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  blueText: {
    color: color.tintColor,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default styles;
