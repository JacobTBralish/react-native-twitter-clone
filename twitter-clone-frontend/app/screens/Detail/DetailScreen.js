import styles from "./styles";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles}>
        <Text>This is the detail screen</Text>
      </View>
    );
  }
}
