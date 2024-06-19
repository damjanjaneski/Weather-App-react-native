import { AppRegistry } from "react-native";
import App from "./src/app/index";
const appName = "WeatherApp";

// Register the app for web
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
});
