import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";

function IconButtons({onPress, children, size }) {
  return (
  
      <Pressable
        style={({ pressed }) => [styles.buttons, pressed && styles.press]}
        onPress={onPress} 
      >
        <View style={styles.view}>
          <Text  style={[styles.text, {fontSize: size? parseInt(size, 10) : 14} ]}> {children}</Text>
        </View>
      </Pressable>
 
  );
}

const styles = StyleSheet.create({
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    maxWidth: 120,
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
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "darkblue",
    borderColor: 'white',
    padding: 5,
    marginLeft: 18,
  
  },
});

export default IconButtons;
