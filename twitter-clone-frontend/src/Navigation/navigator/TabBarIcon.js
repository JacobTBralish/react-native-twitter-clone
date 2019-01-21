import React, { Component } from "react";
import { Ionicons } from "react-native-vector-icons/Ionicons";

import Colors from "../../../Constants/Colors";

export default class TabBarIcon extends Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
