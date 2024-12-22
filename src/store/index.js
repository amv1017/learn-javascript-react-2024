import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api";
import { cartSlice } from "./features/cart";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      // logger
    ),
});
