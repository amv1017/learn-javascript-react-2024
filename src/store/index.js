import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./features/dishes";
import { restaurantsSlice } from "./features/restaurants";

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
  },
});
