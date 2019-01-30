import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import UserImage from "../../Navigation/DrawerNavigator/UserImage";
import TweetList from "../../Components/TweetList/TweetList";

import FloatingButton from "../../Components/FloatingButton/FloatingButton";
import { connect } from "react-redux";
import { toggleModal, postTweet } from "../../store/actions/tweets";
import ModalComponent from "../../Components/Modal/Modal";
import TweetModal from "../../Components/Modal/ModalScreens/Tweet";

import DataFetcher from "../../Components/DataFetcher/DataFetcher";
import { Auth } from "aws-amplify";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <UserImage navigate={navigation.navigate} title="Home" />
  });

  handleInput = text => {
    this.setState({ tweet: text });
  };

  render() {
    console.log("Auth", Auth);
    console.log("Auth.currentUserCredentials", Auth.currentUserCredentials());
    console.log("Auth.user", Auth.user);
    return (
      <View style={styles.container}>
        <ModalComponent
          onToggle={this.props.modalOpened}
          onClose={this.props.onToggleModal}
          handleInput={this.handleInput}
          postTweet={this.props.onPostTweet}
        >
          <TweetModal />
        </ModalComponent>
        <Text>This is the home screen</Text>
        <View>
          <DataFetcher
            url="http://10.0.2.2:4003/api/tweet"
            render={data => {
              return <TweetList data={data} />;
            }}
          />
        </View>
        <View>
          <FloatingButton
            title="Open Modal"
            toggle={this.props.onToggleModal}
          />
        </View>
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
)(HomeScreen);
