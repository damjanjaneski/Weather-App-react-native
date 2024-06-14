import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CityInput from "../components/home-components/SearchCityInput";
import SearchButton from "../components/home-components/SearchCityBtn";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { reset } from "../redux/slices/weatherSlice";
import SearchedCities from "../components/home-components/SearchedCities";

export default function HomeScreen() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(reset());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <CityInput city={city} setCity={setCity} />
      <SearchButton city={city} />
      <SearchedCities />
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
