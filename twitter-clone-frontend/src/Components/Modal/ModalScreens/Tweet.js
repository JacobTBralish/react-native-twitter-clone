import React, { Component } from "react";
import styles from "../styles";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import HandsomeDude from "../../../../Images/HandsomeDude.jpg";

class TweetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: [],
      image: ""
    };
  }

  handleInput = text => {
    this.setState({ tweet: text });
  };

  handlePost = tweet => {
    this.props.postTweet(tweet);
    this.props.onClose();
  };

  render() {
    console.log("tweet in the modal screen", this.state.tweet);

    return (
      <View style={styles.container}>
        <View style={styles.buttonBar}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={this.props.onClose}
          >
            <Text style={styles.blueText}>X</Text>
          </TouchableOpacity>
          <View style={styles.buttonCluster}>
            <TouchableOpacity style={styles.draftsButton}>
              <Text style={styles.blueText}>Drafts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tweetButton}
              onPress={() => this.handlePost(this.state.tweet)}
            >
              <Text style={styles.tweetText}>Tweet</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={HandsomeDude}
            style={{
              marginLeft: 15,
              marginRight: 10,
              width: 35,
              height: 35,
              borderRadius: 35
            }}
          />
          <TextInput
            onChangeText={this.handleInput}
            style={styles.input}
            placeholder="What's happening?"
          />
        </View>
        {/* <Location /> */}
      </View>
    );
  }
}

export default TweetModal;
// const TweetModal = props => {
//   console.log("props.tweet", props.tweet);
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonBar}>
//         <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
//           <Text style={styles.blueText}>X</Text>
//         </TouchableOpacity>
//         <View style={styles.buttonCluster}>
//           <TouchableOpacity style={styles.draftsButton}>
//             <Text style={styles.blueText}>Drafts</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.tweetButton}
//             onPress={() => {
//               props.postTweet(props.tweet), props.onClose;
//             }}
//           >
//             <Text style={styles.tweetText}>Tweet</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.inputContainer}>
//         <Image
//           source={HandsomeDude}
//           style={{
//             marginLeft: 15,
//             marginRight: 10,
//             width: 35,
//             height: 35,
//             borderRadius: 35
//           }}
//         />
//         <TextInput
//           onChangeText={props.handleInput}
//           style={styles.input}
//           placeholder="What's happening?"
//         />
//       </View>
//       {/* <Location /> */}
//     </View>
//   );
// };

// export default TweetModal;
