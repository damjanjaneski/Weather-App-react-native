import { useDispatch, useSelector } from "react-redux";
import { Text, StyleSheet, Pressable } from "react-native";
import { enterName } from "../../redux/slices/weatherSlice";
import { useNavigation } from "@react-navigation/native";
import {
  fetchForecast,
  fetchWeather,
} from "../../redux/asyncThunks/asyncThunks";

export default function SearchButton({ city }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = () => {
    console.log(city);
    dispatch(enterName(city));
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
    navigation.navigate("city", { city });
  };

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
