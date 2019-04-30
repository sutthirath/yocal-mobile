import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import profile from "../assets/images/profile.jpg";
import Chat from "../components/Chat.js";

export default class DashScreen extends React.Component {
  static navigationOptions = {
    title: "Dashboard"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.user}>
          <View>
            <Image
              source={profile}
              alt="profile image"
              style={styles.profileImg}
            />
          </View>
          <View>
            <Text>Sean Vilaysane</Text>
          </View>
        </View>
        <ScrollView horizontal style={styles.card}>
          <Chat />
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCD411"
  },
  user: {
    alignItems: "center",
    paddingTop: 15
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100
  },
  card: {
    height: 250,
    width: 300,
    backgroundColor: "white",
    borderRadius: 5,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "grey",
    shadowOffset: { height: 0, width: 0 }
  }
});
