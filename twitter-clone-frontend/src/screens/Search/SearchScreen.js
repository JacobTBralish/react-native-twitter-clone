import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import UserImage from "../../Navigation/DrawerNavigator/UserImage";

import { connect } from "react-redux";
import { toggleModal } from "../../store/actions/tweets";
import ModalComponent from "../../Components/Modal/Modal";
import TweetModal from "../../Components/Modal/ModalScreens/Tweet";
import FloatingButton from "../../Components/FloatingButton/FloatingButton";

class SearchScreen extends Component {
  static navigationOptions = {
    headerTitle: <UserImage title="Search" />
  };
  render() {
    return (
      <View style={styles.container}>
        <ModalComponent
          onToggle={this.props.modalOpened}
          onClose={this.props.onToggleModal}
        >
          <TweetModal />
        </ModalComponent>
        <Text>This is the Search screen</Text>
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
    modalOpened: state.tweets.modalOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleModal: () => dispatch(toggleModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
