import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { editSearchedCities } from "../redux/slices/weatherSlice";
import { RootState } from "../redux/store/store";

export default function ErrorScreen() {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.name);
  const searchedCities = useSelector(
    (state: RootState) => state.searchedCities
  );

  const index = searchedCities.indexOf(name);
  const updated = searchedCities.filter((_, i: number) => i !== index);

  localStorage.setItem("searchedCities", JSON.stringify(updated));
  useEffect(() => {
    dispatch(editSearchedCities(updated));
  }, [dispatch]);

  return (
    <>
      <View style={styles.container}>
        <Text>Error while data fetching! Please try again</Text>
      </View>
    </>
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
