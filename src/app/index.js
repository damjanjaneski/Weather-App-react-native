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
import { typing } from "../features/weather";

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const city = useSelector((store) => store.weather);
  const apiKey = "0e18b8e776458d181f4107a47925e939";

  const handlePress = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        navigation.navigate("cityWeather", { cityName: city.name });
        dispatch(enterCity(response.data));
      })
      .catch((error) => {
        navigation.navigate("error", {});
      });
  };

  const handleChange = function (value) {
    if (value === " ") return;
    dispatch(typing(value));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange(value)}
        defaultValue={city.name}
        placeholder="Enter a city name"
      />

      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={{ color: "white" }}>Search</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
