import { View, StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";

export default function CityWeatherScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWraper}>
        <View style={styles.title}>
          <Text>City Name</Text>
          <Text>Current Time</Text>
        </View>
        <View style={styles.currentTemp}>
          <Text>WeatherIMG here</Text>
          <Text>TEMP C</Text>
        </View>
        <View style={styles.dailyForcast}>
          {/* <ScrollView> */}
          <Text>Flatlist for each hour (horizontal)</Text>
          {/* </ScrollView> */}
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

  title: {
    height: 75,
    alignItems: "center",
  },

  currentTemp: {
    height: 130,
    flexDirection: "row",
    gap: 25,
  },

  dailyForcast: {
    height: 100,
  },

  weeklyForcast: {
    height: 180,
  },
});
