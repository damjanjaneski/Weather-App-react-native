import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CurrentWeather from "../components/weather-components/CurrentWeather";
import { useNavigation } from "expo-router";
import PlaceAndTime from "../components/weather-components/PlaceAndTime";
import DailyForecast from "../components/weather-components/DailyForecast";
import WeeklyForecast from "../components/weather-components/WeeklyForecast";
import { RootState } from "../redux/store/store";
import { NavigationProps } from "../types/types";

const CityWeatherScreen: React.FC = () => {
  const error = useSelector((state: RootState) => state.error);
  const navigation = useNavigation<NavigationProps>();

  useEffect((): void => {
    if (error) {
      navigation.navigate("error");
    }
  }, []);

  return error ? null : (
    <View style={styles.container}>
      <View style={styles.contentWraper}>
        <PlaceAndTime />
        <CurrentWeather />
        <DailyForecast />
        <WeeklyForecast />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default CityWeatherScreen;
