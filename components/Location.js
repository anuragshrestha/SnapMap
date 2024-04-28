/**
 * This function is used to locate the location of the image.
 * User has the option to use their current location through gps or
 * they can choose a different location through goggle map.
 */

import { View, StyleSheet, Text } from "react-native";
import Buttons from "../UI/Button";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

function Location() {
  const [permissionInformation, getPermission] = useForegroundPermissions();

  async function permission() {
    if (permissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await getPermission();

      return permissionResponse.granted;
    }

    if (permissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Location Permission Denied!!!",
        "Please grant access to your location."
      );
      return false;
    }

    return true;
  }

  async function getCurrentLocation() {
    const locationPermission = await permission();

    if (!locationPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  function getLocationOnMap() {}

  return (
    <View>
      <View style={styles.map}></View>
      <View style={styles.button}>
        <Buttons
          title="Current location"
          icon="location"
          onPress={getCurrentLocation}
        />
        <Buttons
          title="Choose from Map"
          icon="map"
          onPress={getLocationOnMap}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "skyblue",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 60,
    padding: 6,
  },
});

export default Location;
