import { createSelector } from "@reduxjs/toolkit";

const cityTimeSelector = createSelector(
  (state) => state,
  (city) => ({
    name: city.name,
    time: city.time,
  })
);

const cityInfoSelector = createSelector(
  (state) => state,
  (city) => ({
    temp: city.temp,
    icon: city.icon,
    feelsLike: city.feelsLike,
    description: city.description,
  })
);

export { cityTimeSelector, cityInfoSelector };
