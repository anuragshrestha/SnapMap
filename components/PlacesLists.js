/**
 * This file is responsible to shows all the places as a list.
 */

import { FlatList, View, StyleSheet,Text } from "react-native";
import Item from "./Item";

function PlacesLists({ places }) {

    if(!places || places.length == 0){
        return(
            <View style = {styles.container}>
                <Text style = {styles.empty}>
                    No places has been added till now. Please add some places here.
                </Text>
            </View>
        )
    }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item place={item} />}
    />
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    empty: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'maroon',
    }
})

export default PlacesLists;
