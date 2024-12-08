import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ROUTE } from "@/constants.js";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(API_ROUTE + "/users");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No users found");
      return;
    }

    return result;
  },
);
