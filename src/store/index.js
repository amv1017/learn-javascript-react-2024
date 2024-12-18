import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cart";
import { apiSlice } from "./features/api";
import logger from "redux-logger";

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
