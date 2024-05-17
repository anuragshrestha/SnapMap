/**
 * This function is responsible to render each places and how they are render
 */

import { Pressable, View, Image } from "react-native";
import { Text, StyleSheet } from "react-native";

function Item({ place, pressed }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.conatiner, pressed && styles.press]}
      onPress={pressed}
    >
      <Image style={styles.image} source={{ uri: place.imageurl }} />
      <View style={styles.view}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.text}>Latitude: {place.location?.lat}</Text>
        <Text style={styles.text}>Longitude: {place.location?.long}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.15,
    shadowColor: 'black',
    borderRadius: 6,
    elevation: 2,
    marginVertical: 12,
    backgroundColor: 'darkblue',
    borderColor: 'black',
    borderWidth: 2,
    height: 150,
  },
  press: {
    opacity: 0.9,
  },
  image: {
    height: '100%',
    width: 130,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginLeft: 10,

  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 15,
    paddingTop: 10,
   
  },
});

export default Item;
