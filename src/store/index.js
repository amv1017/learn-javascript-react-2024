import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./features/restaurants";
import { dishesSlice } from "./features/dishes";
import { reviewsSlice } from "./features/reviews";
import { usersSlice } from "./features/users";
import { cartSlice } from "./features/cart";
import { requestSlice } from "./features/request";

const loggerMiddleware = (store) => (next) => (action) => {
  return next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
