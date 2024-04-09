import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addForecast } from "../features/forecast";
import PlaceAndTime from "../components/PlaceAndTime";
import CurrentWeather from "../components/CurrentWeather";

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

  const hourlyForecast = data.forecast.properties.slice(1, 7);
  console.log(hourlyForecast[0]);
  const weatherIcon = hourlyForecast[0].weather[0].icon;
  const imgUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

  return (
    <View style={styles.container}>
      <View style={styles.contentWraper}>
        <PlaceAndTime />
        <CurrentWeather />

        <View style={styles.dailyForcast}>
          <FlatList
            data={hourlyForecast}
            renderItem={(item) => {
              return (
                <View styles={styles.hourlyWraper}>
                  <Text>{item.item.dt_txt.slice(11, 16)}</Text>
                  <Image
                    source={imgUrl}
                    style={{ width: 35, height: 35, alignSelf: "center" }}
                  />
                  <Text style={{ alignSelf: "center" }}>
                    {Math.round(item.item.main.temp - 273)}°
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.dt}
            horizontal={true}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          />
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

  dailyForcast: {
    height: 100,
    flexDirection: "row",
  },

  weeklyForcast: {
    height: 180,
  },

  hourlyWraper: {
    justifyContent: "space-between",
  },
});
