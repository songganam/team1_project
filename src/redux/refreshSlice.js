import { createSlice } from "@reduxjs/toolkit";

const refreshSlice = createSlice({
  name: "refresh",
  initialState: 0,
  reducers: {
    setRefresh: state => state + 1,
  },
});

export const { setRefresh } = refreshSlice.actions;

export default refreshSlice.reducer;
