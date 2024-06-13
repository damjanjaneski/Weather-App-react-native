import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ErrorScreen() {
  const city = useSelector((state) => state);

  const searchedCities = JSON.parse(localStorage.getItem("searchedCities"));
  const index = searchedCities.indexOf(city.name);

  searchedCities.splice(index, 1);
  localStorage.setItem("searchedCities", JSON.stringify(searchedCities));

  return (
    <View style={styles.container}>
      <Text>Error while data fetching! Please try again</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
