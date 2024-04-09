import { combineReducers, createStore } from "redux";
import forecastReducer from "./features/forecast";
import weatherReducer from "./features/weather";

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
});

const store = createStore(rootReducer);

export default store;
