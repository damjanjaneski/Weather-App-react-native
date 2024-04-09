import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function HourlyWeather() {
  const data = useSelector((store) => store);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    if (data?.forecast?.properties.length !== undefined) {
      setHourlyForecast(() => data?.forecast?.properties.slice(1, 7));
    }
  }, [data]);

  return (
    <View style={styles.hourlyForcast}>
      <FlatList
        data={hourlyForecast}
        renderItem={(item) => {
          const weatherIcon = item.item.weather[0].icon;
          const imgUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
          return (
            <View styles={styles.hourlyWraper}>
              <Text>{item.item.dt_txt.slice(11, 16)}</Text>
              <Image
                source={{ uri: `${imgUrl}` }}
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
  );
}

const styles = StyleSheet.create({
  hourlyForcast: {
    width: 290,
    height: 100,
    marginLeft: 20,
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
    alignSelf: "center",
  },

  hourlyWraper: {
    justifyContent: "space-between",
  },
});
