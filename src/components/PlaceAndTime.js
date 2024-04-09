import { View, Text, StyleSheet } from "react-native-web";
import { useSelector } from "react-redux";
import moment from "moment-timezone";

export default function PlaceAndTime() {
  const data = useSelector((store) => store);
  const timeOffset = data.weather.timezone;
  const currentLocalTime = moment().utcOffset(timeOffset / 60);
  const formatted = currentLocalTime.format("hh:mm A");

  return (
    <View style={styles.title}>
      <Text>City Name: {data.weather.properties.name}</Text>
      <Text>Current Time: {formatted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 50,
    alignItems: "center",
  },
});
