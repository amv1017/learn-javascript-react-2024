import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const usersAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState(),
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
