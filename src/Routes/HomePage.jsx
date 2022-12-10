import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppExplanation from "../Pages/AppExplanation";
import Home from "../Pages/Home";
import HabitPage from "../Pages/HabitPage";

const Stack = createNativeStackNavigator();

export default function HomePage() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AppExplanation" component={AppExplanation} />
        
        <Stack.Screen name="HabitPage" component={HabitPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}