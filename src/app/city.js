import { View, StyleSheet, Text } from "react-native";
import React from "react";

export default function CityWeatherScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentWraper}>
        <Text>City Weather Page for:</Text>
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
  },
  contentWraper: {
    backgroundColor: "lightblue",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
