import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
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

const dishesAdapter = createEntityAdapter();

const initialState = dishesAdapter.getInitialState({
  ids: [],
  entities: {},
});

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
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
