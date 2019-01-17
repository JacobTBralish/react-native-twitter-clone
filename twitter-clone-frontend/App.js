import React, { Component } from "react";
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from "react-native";
import Navigator from "./app/navigator/Navigator";
import TweetModal from "./app/screens/TweetModal/TweetModal";

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}

// const App = () => {
//   return (
//     <View>
//       {/* <TweetModal /> */}
//       <Navigator />
//     </View>
//   );
// };

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
