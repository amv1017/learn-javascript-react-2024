import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "@/mocks";

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  values: normalizedReviews.reduce((result, current) => {
    result[current.id] = current;
    return result;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.values[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
