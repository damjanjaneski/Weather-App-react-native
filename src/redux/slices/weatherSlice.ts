import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchForecast, fetchWeather } from "../asyncThunks/asyncThunks";

interface CityInfo {
  name: string;
  temp: string;
  time: string;
  feelsLike: string;
  icon: string;
  forecast: string[];
  isLoading: boolean;
  error: string | undefined;
  description: string;
  searchedCities: string[];
}

const initialState: CityInfo = {
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
  initialState,
  reducers: {
    enterName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    reset: (state) => {
      (state.name = ""),
        (state.temp = ""),
        (state.time = ""),
        (state.feelsLike = ""),
        (state.icon = ""),
        (state.forecast = []),
        (state.isLoading = false),
        (state.error = ""),
        (state.description = "");
    },

    editSearchedCities: (state, action: PayloadAction<string[]>) => {
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
