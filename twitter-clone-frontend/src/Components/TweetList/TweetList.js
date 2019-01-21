import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { getAllTweets } from "../../../Constants/TweetsAPI/Tweets";
import { getAllUsers } from "../../../Constants/UsersAPI/Users";

export default class TweetList extends Component {
  static defaultProps = {
    getAllTweets
  };
  state = {
    tweets: [],
    isLoading: true
  };
  async componentDidMount() {
    let data = await this.props.getAllTweets();
    try {
      this.setState({ isLoading: false, tweets: data });
    } catch (error) {
      console.error("Cannot get tweets", error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.tweets.map((tweet, i) => {
          return (
            <Text style={{ flex: 1, width: "100%", height: "80%" }} key={i}>
              {tweet.body}
            </Text>
          );
        })}
      </View>
    );
  }
}
