import { useDispatch, useSelector } from "react-redux";
import { Text, StyleSheet, Pressable } from "react-native";
import { enterName } from "../../redux/slices/weatherSlice";
import {
  fetchForecast,
  fetchWeather,
} from "../../redux/asyncThunks/asyncThunks";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { editSearchedCities } from "../../redux/slices/weatherSlice";

export default function SearchButton({ city }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const searchedCities = useSelector((state) => state.searchedCities);

  const handlePress = () => {
    dispatch(enterName(city));
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));

    const existingCity = searchedCities.find(
      (c) => c.toLowerCase() === city.toLowerCase()
    );

    if (!existingCity) {
      dispatch(editSearchedCities([...searchedCities, city]));
    }

    navigation.navigate("city", { city });
  };

  useEffect(() => {
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
  }, [searchedCities]);

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
