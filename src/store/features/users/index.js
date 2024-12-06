import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { API_ROUTE } from "@/constants.js";

export const getUsers = createAsyncThunk(
  "restaurants/getRestaurants",
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

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  ids: [],
  entities: {},
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      usersAdapter.setMany(state, payload);
    }),
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
