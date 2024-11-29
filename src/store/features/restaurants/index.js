import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "@/mocks";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  values: normalizedRestaurants.reduce(
    (result, current, index) => ({
      ...result,
      [current.id]: { ...current, active: !index },
    }),
    {},
  ),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.values[id],
  },
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantsSlice.selectors;
