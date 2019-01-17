import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class MessagesScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is the messages screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
      },
});