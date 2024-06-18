//THIS FILE IS FOR PRACTICING PURPOSE

import { createSelector } from "@reduxjs/toolkit";

// not necessary file, same functionality would have been achieved with:
// const name = useSelector(state => state.name)
// const name = useSelector(state => state.time)

const cityTimeSelector = createSelector(
  (state) => state,
  (city) => ({
    name: city.name,
    time: city.time,
  })
);

// same here, defining 4 different variables and destructure wanted properties from the state in the suitable component, will omit creating this file

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
