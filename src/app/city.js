import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CurrentWeather from "../components/CurrentWeather";
import { useNavigation } from "expo-router";
import PlaceAndTime from "../components/PlaceAndTime";
import DailyForecast from "../components/DailyForecast";
import WeeklyForecast from "../components/WeeklyForecast";

export default function CityWeatherScreen() {
  const city = useSelector((state) => state);
  const navigation = useNavigation();

  if (city.error) {
    navigation.navigate("error", {});
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentWraper}>
        <PlaceAndTime />
        <CurrentWeather />
        <DailyForecast />
        <WeeklyForecast />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: "#EFFBE9",
  },
  contentWraper: {
    backgroundColor: "lightblue",
    height: 550,
    width: 320,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
