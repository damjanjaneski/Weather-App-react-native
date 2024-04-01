import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(newType) => setCityName(newType)}
        defaultValue={cityName}
        placeholder="Enter a city name"
      />
      <Button
        title="Search"
        onPress={() => navigation.navigate("City", { city: `${cityName}` })}
      />
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

  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
});
