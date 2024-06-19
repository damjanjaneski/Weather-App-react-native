import { View } from "react-native";
import { StyleSheet } from "react-native";
import { enterName } from "../../redux/slices/weatherSlice";
import { useNavigation } from "expo-router";
import {
  fetchForecast,
  fetchWeather,
} from "../../redux/asyncThunks/asyncThunks";
import { useDispatch, useSelector } from "react-redux";
import SearchedCity from "./SearchedCity";
import React, { useEffect } from "react";
import { RootState } from "../../redux/store/store";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { NavigationProps } from "../../types/types";

const SearchedCities: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, undefined, UnknownAction> =
    useDispatch();
  const navigation = useNavigation<NavigationProps>();
  const cities = useSelector((state: RootState) => state.searchedCities);
  const name = useSelector((state: RootState) => state.name);

  const handlePress = function (e: any): void {
    const city = e.target.innerHTML;
    dispatch(enterName(city));
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
  };

  useEffect(() => {
    if (name) {
      navigation.navigate("city", { cityName: name });
    }
  }, []);

  return (
    <View style={styles.container}>
      {cities?.map((city, i) => (
        <SearchedCity key={i} city={city} handlePress={handlePress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    flexDirection: "column",

    justifyContent: "space-around",
    fontFamily: "Sans",
    marginTop: 15,
  },
});

export default SearchedCities;
