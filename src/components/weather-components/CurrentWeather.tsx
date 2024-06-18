import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { cityInfoSelector } from "../../redux/selectors/selectors";
import React from "react";
import { RootState } from "../../redux/store/store";

export default function CurrentWeather() {
  const city = useSelector<RootState, CityInfo>(cityInfoSelector);
  const imgUrl = `http://openweathermap.org/img/w/${city.icon}.png`;
  const weather = Math.round(city.temp - 273);
  const feelsLike = Math.round(city.feelsLike - 273);

  interface CityInfo {
    temp: number;
    icon: string;
    feelsLike: number;
    description: string;
  }

  return (
    <View>
      <Image
        source={{ uri: imgUrl }}
        style={{ width: 90, height: 90, alignSelf: "center" }}
      />
      <Text style={styles.degrees}>{weather}°C</Text>
      <View>
        <Text>
          <b>Weather:</b> {city.description}
        </Text>
        <Text>
          <b>Feels Like:</b> {feelsLike}°C
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  degrees: {
    alignSelf: "center",
    fontSize: 30,
    paddingBottom: 7.5,
  },
  currentTemp: {
    marginRight: 20,
    height: 100,
    flexDirection: "row",
    gap: 10,
  },
});
