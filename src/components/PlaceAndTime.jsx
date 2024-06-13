import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment-timezone";

export default function PlaceAndTime() {
  const city = useSelector((store) => store);
  const timeOffset = city.time;
  const currentLocalTime = moment().utcOffset(new Date() + timeOffset);
  const formatted = currentLocalTime.format("hh:mm A");

  const name = `${
    city.name[0].toUpperCase() +
    city.name.slice(1, city.name.length).toLowerCase()
  }`;

  return (
    <View style={styles.title}>
      <Text>
        <b>City:</b> {name}
      </Text>
      <Text>
        <b>Current Time:</b> {formatted}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    paddingTop: 15,
    height: 50,
    alignItems: "center",
  },
});
