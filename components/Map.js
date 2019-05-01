import React from "react";
import { MapView } from "expo";

export default class Map extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        followsUserLocation={true}
        initialRegion={{
          latitude: this.props.lat,
          longitude: this.props.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}
