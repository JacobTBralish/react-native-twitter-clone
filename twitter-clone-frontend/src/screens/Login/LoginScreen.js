import styles from "./styles";
import React, { Component, Fragment } from "react";
import { Text, Image, TextInput, View, TouchableOpacity } from "react-native";
import TwitterBird from "../../../Images/twitterbirdtransparent.png";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { setUser } from "../../store/actions/user";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authenticationCode: "",
      showConfirmationForm: false
    };
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  signIn = async () => {
    const { username, password } = this.state;
    try {
      const user = await Auth.signIn(username, password);
      console.log("User successfully signed in! :", user);
      this.setState({ showConfirmationForm: true });
      this.props.onSetUser(user);
    } catch (error) {
      console.log("There was an error signing in: ", error);
    }
  };

  confirmSignIn = async () => {
    const { user, authenticationCode } = this.state;
    try {
      await Auth.confirmSignIn(this.props.user, authenticationCode);
      console.log("User successfully signed in!", this.props.user);
      this.props.navigation.navigate("Home");
    } catch (error) {
      console.log("There was an error confirming signing in: ", error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image style={styles.image} source={TwitterBird} />
        </View>
        {!this.state.showConfirmationForm && (
          <Fragment>
            <View>
              <Text style={styles.inputLabels}>Username:</Text>
              <TextInput
                underlineColorAndroid="black"
                style={styles.inputs}
                placeholder="Username"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={val => this.onChangeText("username", val)}
              />
            </View>
            <View>
              <Text style={styles.inputLabels}>Password:</Text>
              <TextInput
                underlineColorAndroid="black"
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={val => this.onChangeText("password", val)}
              />
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button} onPress={this.signIn}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.forgotText}>Forgot password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => this.props.navigation.navigate("Register")}
              >
                <Text style={styles.forgotText}>Register</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
        {this.state.showConfirmationForm && (
          <Fragment>
            <View>
              <TextInput
                placeholder="Authentication Code"
                autoCapitalize="none"
                placeholderTextColor="black"
                onChangeText={val =>
                  this.onChangeText("authenticationCode", val)
                }
              />
              <TouchableOpacity
                style={styles.button}
                onPress={this.confirmSignIn}
              >
                <Text style={styles.buttonText}>Confirm Sign In</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUser: user => dispatch(setUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
