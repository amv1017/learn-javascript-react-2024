import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTE } from "@/constants.js";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (_, { rejectWithValue }) => {
    // get dishes from API
    const response = await fetch(API_ROUTE + "/dishes");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No dishes found");
      return;
    }

    return result;
  },
);
