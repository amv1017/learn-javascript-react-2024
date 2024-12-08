import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTE } from "@/constants.js";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (_, { rejectWithValue }) => {
    const response = await fetch(API_ROUTE + "/reviews");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No reviews found");
      return;
    }

    return result;
  },
);
