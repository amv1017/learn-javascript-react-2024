import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "@/mocks";

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  values: normalizedUsers.reduce(
    (result, current) => ({
      ...result,
      [current.id]: current,
    }),
    {},
  ),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.values[id],
  },
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
