import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";

export default function WeeklyForecast() {
  const city = useSelector((store) => store);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const forecastArr = city.forecast.filter((item) => {
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
                source={{ uri: `${imgUrl}` }}
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
