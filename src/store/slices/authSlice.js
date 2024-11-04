import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "oAuth",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
export const { addUser } = authSlice.actions;
export default authSlice.reducer;
