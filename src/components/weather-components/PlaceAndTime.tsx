import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import moment, { Moment } from "moment-timezone";
import { cityTimeSelector } from "../../redux/selectors/selectors";
import { RootState } from "../../redux/store/store";

interface City {
  name: string;
  time: number;
}

const PlaceAndTime: React.FC = () => {
  const city = useSelector<RootState, City>(cityTimeSelector);
  const timeOffsetInMinutes = city.time * 60;
  const currentLocalTime: Moment = moment().utcOffset(timeOffsetInMinutes);
  const formatted: string = currentLocalTime.format("hh:mm A");
  const name: string = `${
    city.name[0].toUpperCase() + city.name.slice(1).toLowerCase()
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
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 15,
    height: 50,
    alignItems: "center",
  },
});

export default PlaceAndTime;
