import { StatusBar } from "expo-status-bar";
import IconButtons from "./components/IconButtons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Places from "./screens/Places";
import AddPlace from "./screens/AddPlace";
import ViewMap from "./screens/ViewMap";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="All Places"
            component={Places}
            
            options={({ navigation }) => ({
              title: 'Your choosen places',
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: 'blue'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: 'darkblue'},
           
              headerRight: () => (
               <IconButtons onPress={() =>
                 navigation.navigate('Add Places')  }/>
               
              ),
            })}
          />
          <Stack.Screen name="Add Places" component={AddPlace} options={{
            title: 'New Place',
            headerBackTitleVisible: false, 
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: 'darkblue'}
          }} />

          <Stack.Screen  name="Map" component={ViewMap} options={{
            headerBackTitleVisible: false, 
            title: 'Select a place',
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: 'darkblue'}
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
