import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.yocal}>
          <Text>
            <MaterialIcons name="face" size={20} color="limegreen" />
            Sunyoung Kim
          </Text>
        </View>
        <ScrollView>
          <View style={styles.bubble}>
            <Text style={styles.bubbleTxt}>Hi Sunyoung!</Text>
            <Text>Me 4/29/19 12:00PM</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yocal: {
    alignItems: "center"
  },
  bubble: {},
  bubbleTxt: {
    color: "white",
    backgroundColor: "lightblue"
  }
});
