import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addForecast } from "../features/forecast";
import axios from "axios";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";

export default function DailyForecast() {
  const data = useSelector((store) => store);
  const apiKey = "0e18b8e776458d181f4107a47925e939";
  const dispatch = useDispatch();
  const [forecastArr, setForecastArr] = useState([]);

  useEffect(() => {
    if (data.weather.name) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${data.weather.name}&appid=${apiKey}`
        )
        .then((response) => {
          dispatch(addForecast(response.data.list));

          const today = new Date();
          const year = today.getFullYear();
          const month = String(today.getMonth() + 1).padStart(2, "0");
          const day = String(today.getDate()).padStart(2, "0");
          const formattedDate = `${year}-${month}-${day}`;
          setForecastArr(() => {
            return response.data.list.filter((item) => {
              return (
                item.dt_txt.slice(0, 10) !== formattedDate &&
                item.dt_txt.slice(11, 16) === "15:00"
              );
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data.weather.name]);

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <View style={styles.weeklyForcast}>
      <FlatList
        data={forecastArr}
        horizontal={false}
        renderItem={(item) => {
          const itemDate = new Date(item.item.dt_txt.slice(0, 10));
          const dayOfWeek = itemDate.getDay();
          const weatherIcon = item.item.weather[0].icon;
          const imgUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;
          const convertToC = function (tempInK) {
            return Math.round(Number(tempInK) - 273);
          };

          return (
            <View style={styles.nextDay}>
              <Text style={{ width: 100, alignSelf: "center" }}>
                {weekDays[dayOfWeek]}
              </Text>
              <Image
                source={imgUrl}
                style={{ width: 40, height: 40, alignSelf: "center" }}
              />
              <Text style={{ alignSelf: "center" }}>
                {convertToC(item.item.main.temp)}°
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nextDay: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },

  weeklyForcast: {
    height: 200,
  },
});
