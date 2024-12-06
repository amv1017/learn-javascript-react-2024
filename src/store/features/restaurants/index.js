import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { API_ROUTE } from "@/constants.js";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch(API_ROUTE + "/restaurants");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No restaurants found");
      return;
    }

    return result;
  },
);

const restaurantsAdapter = createEntityAdapter();

const initialState = restaurantsAdapter.getInitialState({
  ids: [],
  entities: {},
});

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
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
