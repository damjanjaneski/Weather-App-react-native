import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

export default function CurrentWeather() {
  const city = useSelector((state) => state);

  console.log(city);
  return (
    <View>
      <Text>City: </Text>
      <Image />
      <Text></Text>
      <Text></Text>
    </View>
  );
}
