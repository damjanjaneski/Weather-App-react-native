import { View, Text, StyleSheet, Image } from "react-native-web";
import { useSelector } from "react-redux";

export default function CurrentWeather() {
  const data = useSelector((store) => store);
  const weatherIcon = data.weather.properties.weather[0].icon;
  const imgUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

  const tempInC = Math.round(Number(data.weather.properties.main?.temp) - 273);

  return (
    <View style={styles.currentTemp}>
      <Image
        source={imgUrl}
        style={{ width: 90, height: 90, alignSelf: "center" }}
      />
      <Text style={styles.degrees}>{tempInC}°</Text>
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
    height: 130,
    flexDirection: "row",
    gap: 10,
  },
});
