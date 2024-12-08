import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const reviewsAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviewsAdapter.getInitialState(),
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
