/**
 * This file is responsible to shows all the places as a list.
 */

import { FlatList } from "react-native";
import Item from "./Item";

function PlacesLists({ places }) {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item place={item} />}
    />
  );
}

export default PlacesLists;
