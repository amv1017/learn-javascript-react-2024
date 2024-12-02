import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "@/mocks";

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  values: normalizedDishes.reduce((result, current) => {
    result[current.id] = current;
    return result;
  }, {}),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.values[id],
  },
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
