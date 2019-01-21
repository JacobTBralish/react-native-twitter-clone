import styles from "./styles";
import React, { Component } from "react";
import { Text, Image, TextInput, View, TouchableOpacity } from "react-native";
import TwitterBird from "../../../Images/twitterbirdtransparent.png";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phone_number: "",
      email: "",
      authCode: "",
      user: {}
    };
  }

  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    await Auth.signUp({
      username,
      password,
      attributes: { email, phone_number }
    });
    console.log("Sign up successful");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.image} source={TwitterBird} />
        </View>
        <View>
          <Text style={styles.inputLabels}>Username:</Text>
          <TextInput underlineColorAndroid="black" style={styles.inputs} />
        </View>
        <View>
          <Text style={styles.inputLabels}>Password:</Text>
          <TextInput underlineColorAndroid="black" style={styles.inputs} />
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
