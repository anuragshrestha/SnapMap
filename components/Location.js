/**
 * This function is used to locate the location of the image.
 * User has the option to use their current location through gps or
 * they can choose a different location through goggle map.
 */

import { View, StyleSheet, Text, Image } from "react-native";
import Buttons from "../UI/Button";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";
import { getMap } from "./Map";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

function Location({ onPickLocation }) {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  const [image, setImage] = useState();
  const [permissionInformation, getPermission] = useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const selectedLocation = {
        latitude: route.params.lat,
        longitude: route.params.long,
      };

      setImage(selectedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    onPickLocation(image);
  }, [image, onPickLocation]);

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
    setImage({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  function getLocationOnMap() {
    navigation.navigate("Map");
  }

  return (
    <View>
      <View style={styles.map}>
        {!image ? (
          <Text> Choose a location..</Text>
        ) : (
          <Image
            style={styles.image}
            source={{ uri: getMap(image.latitude, image.longitude) }}
          />
        )}
      </View>
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
    borderRadius: 6,
    overflow: "hidden",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 60,
    padding: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Location;
