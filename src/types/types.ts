import { NavigationProp } from "@react-navigation/native";

export interface RootStackParamList {
  index: undefined;
  city: { cityName: string };
  error: undefined;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
}

export interface ForecastItem {
  dt_txt: string;
  weather: Weather[];
  main: Main;
}

export type NavigationProps = NavigationProp<RootStackParamList>;
