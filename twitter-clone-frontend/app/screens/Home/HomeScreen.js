import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import UserImage from "../../DrawerNavigator/UserImage";
import TweetList from "../../TweetList/TweetList";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <UserImage title="Home" />
  };
  render() {
    console.log("this.props", this.props.navigation.state.routeName);
    return (
      <View style={styles.container}>
        <Text>This is the home screen</Text>
        <View>
          <TweetList />
        </View>
      </View>
    );
  }
}
