import { View, StyleSheet } from "react-native";
import React from "react";
import PlaceAndTime from "../components/PlaceAndTime";
import CurrentWeather from "../components/CurrentWeather";
import HourlyWeather from "../components/HourlyWeather";
import DailyForecast from "../components/DailyForecast";

export default function CityWeatherScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWraper}>
        <PlaceAndTime />
        <CurrentWeather />
        <HourlyWeather />
        <DailyForecast />
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
    width: 300,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
