import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTE } from "@/constants.js";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch(API_ROUTE + "/restaurants");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No restaurants found");
      return;
    }

    return result;
  },
);
