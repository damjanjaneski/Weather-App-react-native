import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";
import { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function RootLayout() {
  const navigation = useNavigation();
  //Reminder: Here I want to make functionality, once it is navigated back to the index screen, the typed city-name to be deleted and to be set to empty input !
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", (e) => {
      console.log("Screen state changed");
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="city" options={{ title: "Weather" }} />
        <Stack.Screen name="error" options={{ title: "Error happened" }} />
      </Stack>
    </Provider>
  );
}
