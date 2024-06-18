import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { enterName } from "../../redux/slices/weatherSlice";
import {
  fetchForecast,
  fetchWeather,
} from "../../redux/asyncThunks/asyncThunks";
import { useEffect } from "react";
import { useNavigation } from "expo-router";
import { editSearchedCities } from "../../redux/slices/weatherSlice";
import { RootState } from "../../redux/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { NavigationProps } from "../../types/types";

interface Info {
  city: string;
}

const SearchButton: React.FC<Info> = ({ city }) => {
  const dispatch: ThunkDispatch<RootState, undefined, UnknownAction> =
    useDispatch();
  const navigation = useNavigation<NavigationProps>();
  const searchedCities = useSelector(
    (state: RootState) => state.searchedCities
  );

  const handlePress = () => {
    if (city === "") return;
    dispatch(enterName(city));
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
    const existingCity = searchedCities.find(
      (c) => c.toLowerCase() === city.toLowerCase()
    );

    if (!existingCity) {
      dispatch(editSearchedCities([...searchedCities, city]));
    }

    navigation.navigate("city", { cityName: city });
  };

  useEffect(() => {
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
  }, [searchedCities]);

  return (
    <Pressable onPress={handlePress} style={styles.btn}>
      <Text style={{ color: "white" }}>Search</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchButton;
