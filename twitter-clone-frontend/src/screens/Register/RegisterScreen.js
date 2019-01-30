import styles from "./styles";

import React, { Component, Fragment } from "react";
import { ScrollView, TextInput, View, Button, Image } from "react-native";
import TwitterBird from "../../../Images/twitterbirdtransparent.png";
import { Auth } from "aws-amplify";

const initialState = {
  username: "",
  password: "",
  email: "",
  phone_number: "",
  authenticationCode: "",
  showConfirmationForm: false
};

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      const success = await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number }
      });
      console.log("User has successfully signed up: ", success);
      this.setState({ showConfirmationForm: true });
    } catch (error) {
      console.log("Error signing up: ", error);
    }
  };

  confirmSignUp = async () => {
    const { username, authenticationCode } = this.state;
    try {
      await Auth.confirmSignUp(username, authenticationCode);
      console.log("Successfully signed up");
      alert("User signed up successfully");
      this.setState({ ...initialState });
      this.props.navigation.navigate("Login");
    } catch (error) {
      console.log("Error confirming signing up: ", error);
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ marginBottom: 50 }}>
          <Button
            style={styles.button}
            title="Back to Login"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
        <View />
        <View style={styles.titleContainer}>
          <Image style={styles.image} source={TwitterBird} />
        </View>
        {!this.state.showConfirmationForm && (
          <Fragment>
            <View>
              <TextInput
                underlineColorAndroid="black"
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={val => this.onChangeText("username", val)}
              />
              <TextInput
                underlineColorAndroid="black"
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={val => this.onChangeText("password", val)}
              />
              <TextInput
                underlineColorAndroid="black"
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={val => this.onChangeText("email", val)}
              />
              <TextInput
                underlineColorAndroid="black"
                style={styles.input}
                placeholder="Phone Number"
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={val => this.onChangeText("phone_number", val)}
              />
            </View>
            <Button
              style={styles.button}
              title="Sign Up"
              onPress={this.signUp}
            />
          </Fragment>
        )}
        {this.state.showConfirmationForm && (
          <Fragment>
            <TextInput
              underlineColorAndroid="black"
              style={styles.input}
              placeholder="Authentication Code"
              autoCapitalize="none"
              placeholderTextColor="black"
              onChangeText={val => this.onChangeText("authenticationCode", val)}
            />
            <Button
              style={styles.button}
              title="Confirm Sign Up"
              onPress={this.confirmSignUp}
            />
          </Fragment>
        )}
      </ScrollView>
    );
  }
}
