import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CityWeatherScreen from "./City";
import HomeScreen from "./index";

const Stack = createStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="city" component={CityWeatherScreen} />
      <Stack.Screen
        name="index"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
