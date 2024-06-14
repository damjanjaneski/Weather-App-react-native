import { View, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CurrentWeather from "../components/weather-components/CurrentWeather";
import { useNavigation } from "@react-navigation/native";
import PlaceAndTime from "../components/weather-components/PlaceAndTime";
import DailyForecast from "../components/weather-components/DailyForecast";
import WeeklyForecast from "../components/weather-components/WeeklyForecast";

export default function CityWeatherScreen() {
  const error = useSelector((state) => state.error);
  const navigation = useNavigation();

  return error ? (
    navigation.navigate("error")
  ) : (
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
