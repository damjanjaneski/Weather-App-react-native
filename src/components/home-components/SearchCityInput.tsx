import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

interface CityInputProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const CityInput: React.FC<CityInputProps> = ({ city, setCity, isLoading }) => {
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
      readOnly={isLoading}
    />
  );
};

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

export default CityInput;
