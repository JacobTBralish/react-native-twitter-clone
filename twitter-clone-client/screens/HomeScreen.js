import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'expo';
import { navigation} from 'react-navigation';

import { getAllTweets } from '../constants/api';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
        <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.openDrawer()}>
            <Icon.Ionicons name="md-menu" size={20} />
        </TouchableOpacity>
    ),
})
  static defaultProps = {
    getAllTweets
  };
  state = {
    tweets: [],
    isLoading: false
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    let data = await this.props.getAllTweets();
    try {
      this.setState({ isLoading: false, tweets: data });
    } catch (error) {
      console.log(error, "Cannot get tweets in cdm");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.tweets.map((tweet, i) => {
          return (
            <Text key={i}>{tweet.body}</Text>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});
