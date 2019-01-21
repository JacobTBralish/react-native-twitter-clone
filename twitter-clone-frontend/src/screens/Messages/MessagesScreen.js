import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import UserImage from "../../Navigation/DrawerNavigator/UserImage";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <UserImage title="Messages" />
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the messages screen</Text>
      </View>
    );
  }
}
