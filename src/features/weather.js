const initialWeather = { name: "", properties: {} };

const weatherReducer = function (state = initialWeather, action) {
  if (action.type === "enter") {
    return { ...state, properties: action.payload };
  } else if (action.type === "delete") {
    return { ...state, name: "" };
  } else if (action.type === "typing") {
    return { ...state, name: action.payload };
  } else return state;
};

export function typing(value) {
  return { type: "typing", payload: value };
}

export function enterCity(value) {
  return { type: "enter", payload: value };
}

export function reset(value) {
  return { type: "delete", payload: value };
}

export default weatherReducer;
