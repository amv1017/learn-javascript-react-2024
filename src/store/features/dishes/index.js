import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const dishesAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: dishesAdapter.getInitialState(),
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      dishesAdapter.setMany(state, payload);
    }),
});

/*
export const selectDishesIds = createSelector(
  (state) => state,
  (state) => state.dishes.ids,
);

export const selectDishById = createSelector(
  [(state) => state.dishes.values, (state, id) => id],
  (values, id) => values[id],
);
*/

export const { selectDishesIds, selectDishById } = dishesSlice.selectors;
