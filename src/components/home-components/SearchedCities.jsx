import { View, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import { enterName } from "../../redux/slices/weatherSlice";
import { useNavigation } from "@react-navigation/native";
import {
  fetchForecast,
  fetchWeather,
} from "../../redux/asyncThunks/asyncThunks";
import { useDispatch } from "react-redux";
import SearchedCity from "./SearchedCity";

export default function SearchedCities() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cities = JSON.parse(localStorage.getItem("searchedCities"));

  const handlePress = function (e) {
    const city = e.target.innerHTML;
    dispatch(enterName(city));
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
    navigation.navigate("city", { city });
  };

  return (
    <View style={styles.container}>
      {cities?.map((city, i) => (
        <SearchedCity key={i} city={city} handlePress={handlePress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    flexDirection: "column",

    justifyContent: "space-around",
    fontFamily: "Sans",
    marginTop: 15,
  },
});
