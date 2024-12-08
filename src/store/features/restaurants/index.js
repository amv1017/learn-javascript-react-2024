import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const restaurantsAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: restaurantsAdapter.getInitialState(),
  selectors: {
    selectRestaurantsIds: (state) => {
      /*
      console.log(
        Object.keys(state.entities).filter(
          (e) => state.entities[e].type === "restaurant",
        ),
        state.ids,
      );
      */
      return state.ids;
    },
    selectRestaurantById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      restaurantsAdapter.setMany(state, payload);
    }),
});

export const { selectRestaurantsIds, selectRestaurantById } =
  restaurantsSlice.selectors;
