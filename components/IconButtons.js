import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

function IconButtons({onPress }) {
  return (
  
      <Pressable
        style={({ pressed }) => [styles.buttons, pressed && styles.press]}
        onPress={onPress}
      >
        <View style={styles.view}>
          <Text style={styles.text}>Add Place</Text>
        </View>
      </Pressable>
 
  );
}

const styles = StyleSheet.create({
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    maxWidth: 120
   
  },
  press: {
    opacity: 0.6,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
     padding: 1
  },
  view: {
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "black",
    padding: 5,
    marginLeft: 18,
  
  },
});

export default IconButtons;
