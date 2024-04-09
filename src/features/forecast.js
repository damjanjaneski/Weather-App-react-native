const initialForecast = {};

const forecastReducer = function (state = initialForecast, action) {
  if (action.type === "add") {
    return { ...state, properties: action.payload };
  } else if (action.type === "delete") {
    return { ...state, properties: action.payload };
  } else return state;
};

export function addForecast(value) {
  return { type: "add", payload: value };
}
export function reset(value) {
  return { type: "delete", payload: value };
}

export default forecastReducer;
