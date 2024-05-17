import { StatusBar } from "expo-status-bar";
import IconButtons from "./components/IconButtons";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from 'expo-app-loading'
import Places from "./screens/Places";
import AddPlace from "./screens/AddPlace";
import ViewMap from "./screens/ViewMap";
import { Children, useEffect, useState } from "react";
import { init } from "./components/database";

export default function App() {
  const Stack = createNativeStackNavigator();

  // const[dbLoading, setdbLoading] = useState(false);

  // useEffect(() => {
  //   init().then(() => {
  //     setdbLoading(true);
  //   }).catch((error) => {
  //     Alert.alert("Error", "Can't fetch data base");
  //   });
  // }, [ ]);

  // if(!dbLoading){
  //   return <AppLoading/>
  // }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="All Places"
            component={Places}
            options={({ navigation }) => ({
              title: "Your choosen places",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "blue" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "darkblue" },

              headerRight: () => (
                <IconButtons
                  children="Add Place"
                  onPress={() => navigation.navigate("Add Places")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Add Places"
            component={AddPlace}
            options={{
              title: "New Place",
              headerBackTitleVisible: false,
              headerStyle: { backgroundColor: "blue" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "darkblue" },
            }}
          />

          <Stack.Screen
            name="Map"
            component={ViewMap}
            options={{
              headerBackTitleVisible: false,
              title: "Select a place",
              headerStyle: { backgroundColor: "blue" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "darkblue" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
