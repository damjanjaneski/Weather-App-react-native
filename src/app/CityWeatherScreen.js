import { View } from "react-native";

export default function CityWeatherScreen({ route }) {
  const { city } = route.params;

  return <View>City Weather Page for: {city}</View>;
}
