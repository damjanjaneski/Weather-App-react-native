import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { enterCity } from "../features/weather";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { typing, reset } from "../features/weather";
import { reset as resetForecast } from "../features/forecast";
import { useEffect } from "react";
import { API_KEY } from "@env";
import ResetReduxOnBackButton from "../features/ResetReduxOnBack";

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.weather);

  const handlePress = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}`
      )
      .then((response) => {
        navigation.navigate("city", { "": city.name });
        dispatch(enterCity(response.data));
      })
      .catch(() => {
        navigation.navigate("error", {});
      });
  };

  useEffect(() => {
    dispatch(reset(""));
    dispatch(resetForecast(""));
  }, []);

  const handleChange = function (value) {
    if (value === " ") return;
    dispatch(typing(value));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange(value)}
        value={city.name}
        placeholder="Enter a city name"
      />

      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <ResetReduxOnBackButton />
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

  input: {
    width: 300,
    height: 50,
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: "#3498db",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
