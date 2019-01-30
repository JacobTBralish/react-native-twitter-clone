import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class UserSetup extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>User Setup</Text>
        </View>
        <View>
          <Text>First Name:</Text>
          <TextInput />
          <Text>Last Name:</Text>
          <TextInput />
          <Text>Country:</Text>
          <TextInput />
          <Text>Birthdate:</Text>
          <TextInput />
        </View>
      </View>
    );
  }
}
