import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import color from "../../Constants/Colors";

export default class FloatingButton extends Component {
  render() {
    return (
      <Button style={styles.button}>
        <Text>Tweet</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: color.tintColor
  }
});
