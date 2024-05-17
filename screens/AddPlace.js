/**
 * This file is responsible to add all the new places
 */

import { insertData } from "../components/database";
import Form from "../components/form";

function AddPlace({ navigation }) {
  function createPlaceHolder(place) {

    navigation.navigate("All Places", {
      place: place,
    });
  }

  return <Form onCreatePlace={createPlaceHolder} />;
}

export default AddPlace;
