import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface WeatherData {
  temp: string;
  feelsLike: string;
  description: string;
  icon: string;
  time: string;
}

const fetchWeather = createAsyncThunk<WeatherData, string>(
  "weather/fetchWeather",
  async (city: string) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e18b8e776458d181f4107a47925e939`
    );

    return {
      temp: res.data.main.temp,
      feelsLike: res.data.main.feels_like,
      description: res.data.weather[0].main,
      icon: res.data.weather[0].icon,
      time: res.data.dt,
    } as WeatherData;
  }
);

const fetchForecast = createAsyncThunk<string[], string>(
  "weather/fetchForecast",
  async (city: string) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0e18b8e776458d181f4107a47925e939`
    );

    return res.data.list;
  }
);

export { fetchWeather, fetchForecast };
