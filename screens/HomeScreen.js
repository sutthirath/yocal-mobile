import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import profile from "../assets/images/profile.jpg";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#FCD411"
  },
  user: {
    alignItems: "center"
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 100
  }
});
