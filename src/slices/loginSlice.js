import { createSlice } from "@reduxjs/toolkit";

const initState = {
  email: "",
};

const loginSlice = createSlice => ({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: () => {
        console.log("login.....")
    },
    logout: () => {
        console.log("logout.....")
    },
  },
});
export const {login, logout} = loginSlice.actions;

export default loginSlice.reducer;
