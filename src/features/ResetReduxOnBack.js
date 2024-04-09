import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { reset as resetWeather } from "../features/weather";
import { reset as resetForecast } from "../features/forecast";
import { useSelector } from "react-redux";

export default function ResetReduxOnBackButton() {
  const data = useSelector((store) => store);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(resetWeather({}));
      dispatch(resetForecast({}));

      return () => {};
    }, [dispatch])
  );

  return null;
}
