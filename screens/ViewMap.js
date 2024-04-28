/**
 * This file is responsible the map location where the snap was capture
 *
 */

import MapView, { Marker } from "react-native-maps";
import { Text, StyleSheet, View } from "react-native";
function ViewMap() {
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView style = {styles.view} initialRegion={region}></MapView>;
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
    }
})


export default ViewMap;
