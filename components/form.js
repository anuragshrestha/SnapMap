import { useScrollToTop } from "@react-navigation/native";
import { useState } from "react";
import { Text, StyleSheet, ScrollView, View, TextInput } from "react-native";

function Form(){

 const[enteredTitle, setEnteredTitle] = useState(' ');

  function changeText(enteredText){
    setEnteredTitle(enteredText);
  }

    return (
        <ScrollView style = {styles.form}>
            <View>
                <Text style = {styles.conatiner}>
                    Title
                </Text>
                <TextInput style = {styles.input}  onChangeText={changeText} value= {enteredTitle} />
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
    }
})