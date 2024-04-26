import { StatusBar } from "expo-status-bar";
import IconButtons from "./components/IconButtons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Places from "./screens/Places";
import AddPlace from "./screens/AddPlace";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="All Places"
            component={Places}
            options={({ navigation }) => ({
              headerRight: () => (
               <IconButtons onPress={() =>
                 navigation.navigate('Add Places')  }/>
               
              ),
            })}
          />
          <Stack.Screen name="Add Places" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
