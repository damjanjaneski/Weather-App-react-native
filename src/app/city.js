import { View, StyleSheet } from "react-native";
import React from "react";

export default function CityWeatherScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWraper}></View>
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
    width: 320,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
