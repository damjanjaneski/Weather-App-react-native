import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

export default function CurrentWeather() {
  const data = useSelector((store) => store);
  // console.log(data?.weather?.properties.weather[0]?.icon); --> it is not reachable directly on the mobile device --> cannot convert undefined value to object
  const cityArr = data?.weather?.properties.weather;
  const city = { ...cityArr };
  const weatherIcon = city[0]?.icon;
  const imgUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
  const tempInC = Math.round(data?.weather?.properties?.main?.temp - 273);
  const feelsLike = Math.round(
    data?.weather?.properties?.main?.feels_like - 273
  );
  const weatherDesc = city[0]?.main;

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.currentTemp}>
        <Image
          source={{ uri: `${imgUrl}` }}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />

        <Text style={styles.degrees}>{tempInC}°</Text>
      </View>
      <Text>Weather: {weatherDesc}</Text>
      <Text>Feels Like: {feelsLike}°</Text>
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
