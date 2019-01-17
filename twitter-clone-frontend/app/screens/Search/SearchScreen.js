import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import UserImage from "../../DrawerNavigator/UserImage";

export default class OptionsScreen extends Component {
  static navigationOptions = {
    headerTitle: <UserImage title="Search" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Search screen</Text>
      </View>
    );
  }
}
