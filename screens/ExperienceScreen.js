import React from "react";
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native";

export default class ExperienceScreen extends React.Component {
  static navigationOptions = {
    title: "Experience"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>Host an Experience!</Text>
        </View>
        <View>
          <TextInput placeholder="Event Name" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCD411"
  }
});
