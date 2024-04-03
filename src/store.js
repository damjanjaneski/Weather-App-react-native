import { combineReducers, createStore } from "redux";
import forecastReducer from "./features/forecast";
import weatherReducer from "./features/weather";

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
});

const store = createStore(rootReducer);

export default store;
// import { createStore } from "redux";

// const initialState = {};

// const reducer = function (state = initialState, action) {
//   if (action.type === "enter") {
//     return { properties: action.payload };
//   } else if (action.type === "delete") {
//     return { properties: action.payload };
//   } else return state;
// };

// const store = createStore(reducer);

// export function enterCity(value) {
//   return { type: "enter", payload: value };
// }

// export function reset(value) {
//   return { type: "delete", payload: value };
// }

// export default reducer;
