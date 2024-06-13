import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native-web";

export default function SearchedCity({ city, handlePress }) {
  return (
    <Pressable onPress={(e) => handlePress(e)}>
      <Text style={styles.cityBtn}>{`${city}`}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cityBtn: {
    border: "1px solid grey",
    padding: 5,
    borderRadius: 7.5,
    marginBottom: 5,
  },
});
