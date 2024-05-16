import { useScrollToTop } from "@react-navigation/native";
import { useCallback, useState } from "react";
import TakeImage  from './TakeImage';
import { StyleSheet,View,Text,TextInput,ScrollView } from "react-native";
import Location from "./Location";
import IconButtons from "./IconButtons";
import { Place } from "../structure/place";

function Form({onCreatePlace}){

 const[enteredTitle, setEnteredTitle] = useState(' ');
 const[enteredImage, setEnteredImage] = useState();
 const[eneteredLocation, setEnteredLocation] = useState();



  function changeText(enteredText){
    setEnteredTitle(enteredText);
  }

  function changeImage(uri){
    setEnteredImage(uri);
  }
 
  const changeLocation = useCallback((location) => {
    setEnteredLocation(location);
  }, [ ]);

  function savePlaceHandler(){
    console.log(eneteredLocation);
    console.log(enteredImage);
    console.log(enteredTitle);

    const placeData = new Place(enteredTitle, enteredImage, eneteredLocation);
    onCreatePlace(placeData);

  }

    return (
        <ScrollView style = {styles.form}>
            <View>
                <Text style = {styles.conatiner}>
                    Title
                </Text>
                <TextInput style = {styles.input}  onChangeText={changeText} value= {enteredTitle} />
            </View>
        <TakeImage onTakeImage = {changeImage} />
        <Location onPickLocation = {changeLocation} />
        <View style = {styles.button}>
        <IconButtons onPress={savePlaceHandler} size= '18' > Submit </IconButtons>
        </View>
        </ScrollView>
    )
}

export default Form;


const styles = StyleSheet.create({
    conatiner:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 4
    },
    form:{
        flex: 1,
        padding: 24,
    },
    input:{
     marginVertical: 8,
     paddingHorizontal: 4,
     paddingVertical: 8,
     fontSize: 16,
     borderColor: 'darkblue',
     borderWidth: 3,
     color: 'black',
     fontWeight : 'bold',
     backgroundColor: 'skyblue',
     borderRadius: 8
    },
    button:{
        marginRight: 20,
        alignItems: 'center',
        paddingVertical: 8,
        fontSize: 18
    },
    text:{
        fontSize: 18
    }
})