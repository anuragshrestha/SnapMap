/**
 * This file is responsible the map location where the snap was capture
 *
 */

import MapView, { Marker } from "react-native-maps";
import { Text, StyleSheet, View } from "react-native";
import { useState } from "react";
function ViewMap() {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function clickLocationHandler(event) {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: latitude, long: longitude });
  }

  return (
    <MapView
      style={styles.view}
      initialRegion={region}
      onPress={clickLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Select a Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.long,
          }}
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ViewMap;
