import React from "react";
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.yocal}>
          <Text style={{ textAlign: "center" }}>
            <MaterialIcons name="face" size={20} color="limegreen" />
            Sunyoung Kim
          </Text>
        </View>
        <ScrollView>
          <View style={styles.bubble}>
            <Text style={styles.msg}>Hi Sunyoung!</Text>
            <Text style={styles.timestamp}>Me 4/29/19 12:00PM</Text>
          </View>
        </ScrollView>
        <View style={styles.chatInput}>
          <TextInput placeholder="type your message here" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  yocal: {},
  bubble: {},
  msg: {
    color: "white",
    backgroundColor: "lightblue"
  },
  timestamp: {
    fontSize: 10
  },
  chatInput: {
    borderStyle: "solid",
    borderTopColor: "grey",
    borderTopWidth: 1
  }
});
