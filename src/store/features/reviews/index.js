import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { API_ROUTE } from "@/constants.js";

export const getReviews = createAsyncThunk(
  "restaurants/getRestaurants",
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

const reviewsAdapter = createEntityAdapter();

const initialState = reviewsAdapter.getInitialState({
  ids: [],
  entities: {},
});

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      reviewsAdapter.setMany(state, payload);
    }),
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
