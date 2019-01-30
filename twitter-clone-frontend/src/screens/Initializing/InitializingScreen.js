import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { View, Text, Image } from "react-native";
import TwitterBird from "../../../Images/twitterbirdtransparent.png";
import styles from "./styles";

class Initalizing extends Component {
  async componentDidMount() {
    console.log("Checking for a user in initializing");
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        console.log("user found in initalizing: ", user);
        this.props.navigation.navigate("Home");
      } else {
        this.props.navigation.navigate("Login");
      }
    } catch (error) {
      console.log("error in intializing: ", error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={TwitterBird} />
      </View>
    );
  }
}

export default Initalizing;
