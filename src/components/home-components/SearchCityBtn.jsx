import { useDispatch } from "react-redux";
import { Text, StyleSheet, Pressable } from "react-native";
import { enterName } from "../../redux/slices/weatherSlice";
import { useNavigation } from "@react-navigation/native";
import {
  fetchForecast,
  fetchWeather,
} from "../../redux/asyncThunks/asyncThunks";
import { useEffect } from "react";

export default function SearchButton({ city, searched, setSearched }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = () => {
    dispatch(enterName(city));
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
    setSearched([...searched, city]);
    navigation.navigate("city", { city });
  };

  useEffect(() => {
    localStorage.setItem("searchedCities", JSON.stringify(searched));
  }, [searched]);

  return (
    <Pressable onPress={handlePress} style={styles.btn}>
      <Text style={{ color: "white" }}>Search</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
