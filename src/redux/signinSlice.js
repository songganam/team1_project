import { createSlice } from "@reduxjs/toolkit";

const initState = {
  result: 0,
};
const signinSlice = createSlice({
  name: "signinSlice",
  initialState: initState,

  reducers: {
    signin: () => {
      console.log("sign-in ....");
    },
    signout: () => {
      console.log("sign-out ....");
    },
  },
});
export const { signin, signout } = signinSlice.actions;

export default signinSlice.reducer;
