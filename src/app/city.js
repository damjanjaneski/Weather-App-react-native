import { View, StyleSheet, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addForecast } from "../features/forecast";

export default function CityWeatherScreen() {
  const data = useSelector((store) => store);
  const apiKey = "0e18b8e776458d181f4107a47925e939";
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.weather.name) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${data.weather.name}&appid=${apiKey}`
        )
        .then((response) => {
          dispatch(addForecast(response.data.list));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data.weather.name]);

  console.log(data.forecast.properties);

  return (
    <View style={styles.container}>
      <View style={styles.contentWraper}>
        <View style={styles.title}>
          <Text>City Name: {data.weather.name}</Text>
          <Text>Current Time</Text>
        </View>
        <View style={styles.currentTemp}>
          <Text>WeatherIMG here</Text>
          <Text>{data.weather.properties.main?.temp} C</Text>
        </View>
        <View style={styles.dailyForcast}>
          {/* <ScrollView> */}
          <Text>Flatlist for each hour (horizontal)</Text>
          {/* </ScrollView> */}
        </View>
        <View style={styles.weeklyForcast}>
          {/* <ScrollView> */}
          <Text>Flatlist for next days (vertical)</Text>
          {/* </ScrollView> */}
        </View>
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

  title: {
    height: 75,
    alignItems: "center",
  },

  currentTemp: {
    height: 130,
    flexDirection: "row",
    gap: 25,
  },

  dailyForcast: {
    height: 100,
  },

  weeklyForcast: {
    height: 180,
  },
});
