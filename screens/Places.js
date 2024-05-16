/**
 * This file shows all the places that has been added.
 */

import { useEffect, useState } from "react";
import PlacesLists from "../components/PlacesLists";
import { useIsFocused } from "@react-navigation/native";

function Places({route}){

   const[updatedPlaces, setUpdatedPlaces] = useState([]);
   const isFocused = useIsFocused();

   useEffect(() => {
      if(isFocused && route.params){
        setUpdatedPlaces((currentPlaces) => [...currentPlaces, route.params.place])
      }
   }, [isFocused, route]);



    return(
        <PlacesLists places={updatedPlaces} />
    )
}

export default Places;