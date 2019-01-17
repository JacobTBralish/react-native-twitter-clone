import React, { Component } from "react";
import styles from "./styles";
import {
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal
} from "react-native";
import HandsomeDude from "../../../Images/HandsomeDude.jpg";

export default class TweetModal extends Component {
  render() {
    return (
      <Modal>
        <View style={styles.container}>
          <View style={styles.buttonBar}>
            <TouchableOpacity style={styles.closeButton}>
              <Text style={styles.blueText}>X</Text>
            </TouchableOpacity>
            <View style={styles.buttonCluster}>
              <TouchableOpacity style={styles.draftsButton}>
                <Text style={styles.blueText}>Drafts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tweetButton}>
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
            <TextInput style={styles.input} placeholder="What's happening?" />
          </View>
          {/* <Location /> */}
        </View>
      </Modal>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5FCFF"
//   },
//   buttonBar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     height: 60,
//     alignItems: "center"
//   },
//   buttonCluster: {
//     flexDirection: "row",
//     marginRight: 10
//   },
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-start"
//   },
//   input: {
//     fontSize: 18
//   },
//   closeButton: {
//     color: color.tintColor,
//     height: 32,
//     width: 50,
//     backgroundColor: "transparent",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   draftsButton: {
//     backgroundColor: "transparent",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 32,
//     width: 80
//   },
//   tweetButton: {
//     height: 32,
//     width: 80,
//     borderRadius: 25,
//     backgroundColor: color.tintColor,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 5
//   },
//   tweetText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold"
//   },
//   blueText: {
//     color: color.tintColor,
//     fontSize: 18,
//     fontWeight: "bold"
//   }
// });
