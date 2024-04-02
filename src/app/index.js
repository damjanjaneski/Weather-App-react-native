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

export default function HomeScreen() {
  const [cityName, setCityName] = useState("");
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("city", { cityName: cityName });
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

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./HomeScreen";
// import CityWeatherScreen from "./CityWeatherScreen";
// import ErrorScreen from "./ErrorScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="City" component={CityWeatherScreen} />
//       <Stack.Screen name="Error" component={ErrorScreen} />
//     </Stack.Navigator>
//   );
// }
