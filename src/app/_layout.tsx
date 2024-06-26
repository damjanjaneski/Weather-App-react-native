import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import React from "react";

const RootLayout: React.FC = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="city" options={{ title: "Weather" }} />
        <Stack.Screen name="error" options={{ title: "Error happened" }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
