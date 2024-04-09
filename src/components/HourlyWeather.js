import { View, Text, FlatList, Image, StyleSheet } from "react-native-web";
import { useSelector } from "react-redux";

export default function HourlyWeather() {
  const data = useSelector((store) => store);
  const hourlyForecast = data.forecast.properties.slice(1, 7);
  const weatherIcon = hourlyForecast[0]?.weather[0].icon;
  const imgUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

  return (
    <View style={styles.hourlyForcast}>
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
  );
}

const styles = StyleSheet.create({
  hourlyForcast: {
    height: 100,
    flexDirection: "row",
    marginTop: 25,
  },

  hourlyWraper: {
    justifyContent: "space-between",
  },
});
