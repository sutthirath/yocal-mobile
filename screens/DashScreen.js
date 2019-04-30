import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import profile from "../assets/images/profile.jpg";

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
  }
});
