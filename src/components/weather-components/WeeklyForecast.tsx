import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { ForecastItem } from "../../types/types";

const WeeklyForecast: React.FC = () => {
  const forecast = useSelector((store: RootState) => {
    return store.forecast as unknown as ForecastItem[];
  });

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const forecastArr = forecast.filter((item) => {
    return (
      item.dt_txt.slice(0, 10) !== formattedDate &&
      item.dt_txt.slice(11, 16) === "15:00"
    );
  });

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const convertToC = (tempInK: number) => {
    return Math.round(tempInK - 273.15); // Conversion from Kelvin to Celsius
  };

  return (
    <View style={styles.weeklyForecast}>
      <FlatList
        data={forecastArr}
        horizontal={false}
        renderItem={({ item }) => {
          const itemDate = new Date(item.dt_txt.slice(0, 10));
          const dayOfWeek = itemDate.getDay();
          const weatherIcon = item.weather[0].icon;
          const imgUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

          return (
            <View style={styles.nextDay}>
              <Text style={{ width: 100, alignSelf: "center" }}>
                {weekDays[dayOfWeek]}
              </Text>
              <Image
                source={{ uri: imgUrl }}
                style={{ width: 40, height: 40, alignSelf: "center" }}
              />
              <Text style={{ alignSelf: "center" }}>
                {convertToC(item.main.temp)}°C
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.dt_txt} // Assuming dt_txt is unique for each forecast item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nextDay: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  weeklyForecast: {
    height: 200,
  },
});

export default WeeklyForecast;
