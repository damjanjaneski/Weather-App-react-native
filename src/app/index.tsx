import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import SearchButton from "../components/home-components/SearchCityBtn";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { reset } from "../redux/slices/weatherSlice";
import SearchedCities from "../components/home-components/SearchedCities";
import CityInput from "../components/home-components/SearchCityInput";
import Loader from "../components/home-components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.isLoading);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(reset());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <CityInput city={city} setCity={setCity} isLoading={isLoading} />
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <SearchButton city={city} />
      )}
      <SearchedCities />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
