import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface SearchedCityProps {
  city: string;
  handlePress: (e: any) => void;
}

const SearchedCity: React.FC<SearchedCityProps> = ({ city, handlePress }) => {
  return (
    <Pressable onPress={(e) => handlePress(e)}>
      <Text style={styles.cityBtn}>
        {`${city.charAt(0).toUpperCase()}${city.slice(1).toLowerCase()}`}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cityBtn: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    borderRadius: 7.5,
    marginBottom: 5,
  },
});

export default SearchedCity;
