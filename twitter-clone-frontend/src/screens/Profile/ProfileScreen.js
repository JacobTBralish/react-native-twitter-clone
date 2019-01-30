import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class TweetViewScreen extends Component {
  static navigationOptions = {
    header: "none"
  };
  render() {
    console.log(
      "Auth.currentAuthenticatedUser()",
      Auth.currentAuthenticatedUser()
    );
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalOpened: state.tweets.modalOpened,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(toggleModal()),
    onPostTweet: tweet => dispatch(postTweet(tweet))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetViewScreen);
