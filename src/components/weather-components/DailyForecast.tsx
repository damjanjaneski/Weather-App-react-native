import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

interface RootState {
  forecast: ForecastItem[];
}

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

const DailyForecast: React.FC = () => {
  const forecast = useSelector((store: RootState) => store.forecast);
  const dailyForecast = forecast.slice(1, 7);

  return (
    <View style={styles.hourlyForecast}>
      <FlatList
        data={dailyForecast} // Ensure dailyForecast matches ForecastItem[]
        renderItem={({ item }) => {
          const weatherIcon = item.weather[0]?.icon;
          const imgUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;
          return (
            <View style={styles.hourlyWrapper}>
              <Text>{item.dt_txt.slice(11, 16)}</Text>
              <Image
                source={{ uri: imgUrl }}
                style={{ width: 35, height: 35, alignSelf: "center" }}
              />
              <Text style={{ alignSelf: "center" }}>
                {Math.round(item.main.temp - 273)}°
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.dt.toString()}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hourlyForecast: {
    width: 290,
    height: 100,
    marginLeft: 20,
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
    alignSelf: "center",
  },
  hourlyWrapper: {
    justifyContent: "space-between",
  },
});

export default DailyForecast;
