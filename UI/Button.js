/**
 * This file creates a custom button
 */

import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Buttons({ icon, title, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
        <Ionicons style = {styles.icon} name= {icon} size={18} color= 'white' />
      <Text style={styles.text}> {title} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    justifyContent: "center",
    margin: 4,
    padding: 4,
    paddingVertical: 6,
    borderWidth: 2,
    flexDirection: "row",
   borderColor: 'skyblue',
   borderRadius: 6,
   maxWidth: 200,
   marginLeft: 80,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",

  },
  icon:{
    padding: 2,
  }
});

export default Buttons;
