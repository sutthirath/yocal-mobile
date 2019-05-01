import React from "react";
import { View, StyleSheet } from "react-native";
import Map from "../components/Map.js";

export default class ExploreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lon: -122.3354315,
      lat: 47.6078668
    };
  }

  static navigationOptions = {
    title: "Explore"
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position.coords;
        this.setState({
          lon: location.longitude,
          lat: location.latitude
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Map lon={this.state.lon} lat={this.state.lat} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
