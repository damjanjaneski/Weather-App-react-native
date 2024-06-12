import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput } from "react-native";
import CityInput from "../components/ui-components/CityInput";
import SearchButton from "../components/ui-components/SearchCityBtn";
import { useState } from "react";

export default function HomeScreen() {
  const [city, setCity] = useState("");

  return (
    <View style={styles.container}>
      <CityInput city={city} setCity={setCity} />
      <SearchButton city={city} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
