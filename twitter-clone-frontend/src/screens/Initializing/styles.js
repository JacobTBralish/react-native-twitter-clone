import React, { Component } from "react";
import { StyleSheet } from "react-native";
import colors from "../../../Constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.tintColor
  },
  image: {
    width: 100,
    height: 100
    // backgroundColor: colors.tintColor
  }
});

export default styles;
