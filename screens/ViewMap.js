/**
 * This file is responsible the map location where the snap was capture
 *
 */

import MapView, { Marker } from "react-native-maps";
import { Text, StyleSheet, View, Alert } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import AddPlace from "./AddPlace";
import Buttons from "../UI/Button";
function ViewMap({ navigation }) {
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

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked", "Please select a location first");
      return;
    }

    navigation.navigate("Add Places", {
      lat: selectedLocation.lat,
      long: selectedLocation.long,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintcolor }) => (
        <Buttons
          icon="save"
          size={24}
          color={tintcolor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

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
