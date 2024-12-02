import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./features/restaurants";
import { dishesSlice } from "./features/dishes";
import { reviewsSlice } from "./features/reviews";
import { usersSlice } from "./features/users";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
