import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const [cityName, setCityName] = useState("");
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("cityWeather", { cityName: cityName });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(newType) => setCityName(newType)}
        defaultValue={cityName}
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
    background: (
      <LinearGradient
        colors={["#1a1a1a", "#660000"]}
        start={[0, 0]}
        end={[1, 0]}
        style={StyleSheet.absoluteFill}
      />
    ),
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
