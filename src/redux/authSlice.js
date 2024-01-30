import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCookie, removeCookie, setCookie } from "../util/CookiesUtil";
import { loginPost, logoutPost } from "../api/loginApi";

export const loginPostAsync = createAsyncThunk(
  "loginPostAsync",
  async ({ authParam, successFn, failFn, errorFn }) => {
    try {
      const res = await loginPost({ authParam, successFn, failFn, errorFn });
      return res;
    } catch (error) {
      return error;
    }
  },
);
const initState = {
  result: 0,
};
const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  return memberInfo;
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: loadMemberCookie() || initState,

  reducers: {
    login: (state, action) => {
      console.log("sign-in ....");
      console.log(action.payload);
      // ! 로그인 시 result 1 을 준다.
      return { result: 1 };
    },
    logout: (state, action) => {
      console.log("sign-out ....");
      removeCookie("member", "/");
      return { ...initState };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        console.log(payload);
        if (!payload.error) {
          setCookie("member", JSON.stringify(payload));
        }
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pendding");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
