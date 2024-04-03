import { createStore } from "redux";

const initialState = { type: "cityName", payload: "" };

const reducer = function (state = initialState, action) {
  if (action.type === "cityName") {
    return { ...state, payload: action.payload };
  } else return state;
};

const store = createStore(reducer);

export function enterCity(value) {
  return { type: "cityName", payload: value };
}

export default store;
