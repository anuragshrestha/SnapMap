import { Text, StyleSheet } from "react-native";

function Form(){
    return (
        <Text style = {styles.conatiner}>
            Add a place here
        </Text>
    )
}

export default Form;


const styles = StyleSheet.create({
    conatiner:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 100
    }
})