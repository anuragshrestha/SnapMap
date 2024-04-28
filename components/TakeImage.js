/**
 * This function is responsible to take the image.
 */

import { View, Text, Button, Alert, Image, StyleSheet } from "react-native";
import Buttons from "../UI/Button";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

function ImageTaker() {
  const [takenImage, setTakenImage] = useState();
  const [permissionInformation, getPermission] = useCameraPermissions();

  async function permission() {
    if (permissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await getPermission();

      return permissionResponse.granted;
    }

    if (permissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Camera Permission Denied!!!",
        "Please grant access to the camera."
      );
      return false;
    }

    return true;
  }

  async function takeImage() {
    const hasPermission = await permission();

    if (!hasPermission) {
      return;
    }

    try {
      const image = await launchCameraAsync({
        allowsEditing: true,
        quality: 0.5,
        aspect: [16, 9],
      });

      if (!image.canceled) {
        setTakenImage(image.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Error", "Could not take an image, please try again!");
    }
  }

  return (
    <View>
      <View style={styles.conatiner}>
        {!takenImage ? (
          <Text>No image taken..</Text>
        ) : (
          <Image style={styles.image} source={{ uri: takenImage }} />
        )}
      </View>
      <Buttons title="Take Picture" icon="camera" onPress={takeImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    width: "100%",
    height: 150,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    borderRadius: 6,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageTaker;
