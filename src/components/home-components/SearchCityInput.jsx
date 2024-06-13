import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";

export default function CityInput({ city, isLoading, setCity }) {
  useFocusEffect(
    React.useCallback(() => {
      setCity("");
    }, [])
  );

  return (
    <TextInput
      style={styles.input}
      onChangeText={(value) => setCity(value)}
      value={city}
      placeholder="Enter a city name"
      editable={!isLoading}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
});
