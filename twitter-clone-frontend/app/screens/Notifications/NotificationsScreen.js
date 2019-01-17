import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import UserImage from "../../DrawerNavigator/UserImage";

export default class Notifications extends Component {
  static navigationOptions = {
    headerTitle: <UserImage title="Notifications" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the notifications screen</Text>
      </View>
    );
  }
}
