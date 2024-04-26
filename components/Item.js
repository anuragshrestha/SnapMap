/**
 * This function is responsible to render each places and how they are render
 */


import { Pressable, View,Image } from "react-native";

function Item({ place, pressed }) {
  return (
    <Pressable onPress={pressed} >
      <Image source={{uri: place.imageUrl}} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default Item;
