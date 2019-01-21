import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import color from "../../../Constants/Colors";

const FloatingButton = props => {
  return (
    <TouchableOpacity onPress={props.toggle} style={styles.button}>
      <Text>Tweet</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 60,
    position: "absolute",
    left: 125,
    bottom: 25,
    backgroundColor: color.tintColor,
    justifyContent: "center",
    alignItems: "center",
    // ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    // android
    elevation: 5
  }
});
