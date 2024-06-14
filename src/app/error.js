import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { editSearchedCities } from "../redux/slices/weatherSlice";

export default function ErrorScreen() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const searchedCities = useSelector((state) => state.searchedCities);
  const index = searchedCities.indexOf(name);
  const updated = searchedCities.filter((_, i) => i !== index);
  localStorage.setItem("searchedCities", JSON.stringify(updated));
  useEffect(() => {
    dispatch(editSearchedCities(updated));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Error while data fetching! Please try again</Text>
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
});
