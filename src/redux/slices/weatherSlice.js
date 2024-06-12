import { createSlice } from "@reduxjs/toolkit";
import { fetchForecast, fetchWeather } from "../asyncThunks/asyncThunks";

const cityInfo = {
  name: "",
  temp: "",
  feelsLike: "",
  icon: "",
  forecast: [],
  isLoading: false,
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: cityInfo,
  reducers: {
    enterName: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.temp = action.payload.temp;
      state.feelsLike = action.payload.feelsLike;
      state.description = action.payload.description;
      state.icon = action.payload.icon;
      state.isLoading = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchForecast.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.forecast = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchForecast.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const weatherReducer = weatherSlice.reducer;

const { enterName } = weatherSlice.actions;

export { weatherReducer, enterName };
