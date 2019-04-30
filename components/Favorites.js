import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class Favorites extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Favorites</Text>
        <FlatList
          data={[
            { key: "Hot As Pho" },
            { key: "Chipotle" },
            { key: "Taco Bell" },
            { key: "Chikfila" },
            { key: "Jimmy Johns" },
            { key: "Subway" },
            { key: "Thai Yum" },
            { key: "Outback Steakhouse" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center"
  },
  title: {
    color: "orange",
    fontSize: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
