import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CityInput from "../components/ui-components/CityInput";
import SearchButton from "../components/ui-components/SearchCityBtn";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/slices/weatherSlice";

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
