import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

export default class Chat extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Sean: Hello, World!</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
