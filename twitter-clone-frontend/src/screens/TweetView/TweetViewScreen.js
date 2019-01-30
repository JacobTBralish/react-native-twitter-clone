import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class TweetViewScreen extends Component {
  static navigationOptions = {
    headerTitle: "Thread"
  };
  render() {
    console.log("user: ", this.props.user);
    console.log(
      "Auth.currentAuthenticatedUser()",
      Auth.currentAuthenticatedUser()
    );
    return (
      <View style={styles.container}>
        {/* <View>
          <Image source={props.authorImage}/>
          <View>
            <Text>{props.authorName}</Text>
            <Text>{props.username}</Text>
          </View>
        </View> */}
        {/* <View>
          <Text>{props.body}</Text>
          <View>
            <Text>{}</Text>
            <Text>{}</Text>
            <TouchableOpacity>
            <Text></Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <Text style={{ fontSiZe: 30 }}>Tweet View Screen</Text>
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
