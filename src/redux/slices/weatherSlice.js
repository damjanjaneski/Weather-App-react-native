import { createSlice } from "@reduxjs/toolkit";
import { fetchForecast, fetchWeather } from "../asyncThunks/asyncThunks";

const cityInfo = {
  name: "",
  temp: "",
  time: "",
  feelsLike: "",
  icon: "",
  forecast: [],
  isLoading: false,
  error: "",
  description: "",
  searchedCities: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: cityInfo,
  reducers: {
    enterName: (state, action) => {
      state.name = action.payload;
    },

    reset: (state) => {
      state.name = "";
      state.temp = "";
      state.feelsLike = "";
      state.icon = "";
      state.forecast = [];
      state.isLoading = false;
      state.error = "";
      state.description = "";
      state.time = "";
    },

    editSearchedCities: (state, action) => {
      state.searchedCities = action.payload;
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
      state.time = action.payload.time;
      state.isLoading = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
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
      state.error = action.error.message;
    });
  },
});

const weatherReducer = weatherSlice.reducer;

const { enterName, reset, editSearchedCities } = weatherSlice.actions;

export { weatherReducer, enterName, reset, editSearchedCities };
