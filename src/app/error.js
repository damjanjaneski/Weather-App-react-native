import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native";

export default function ErrorScreen() {
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
