import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/meatApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

export const loginPostAsync = createAsyncThunk(
  "loginPostAsync",
  async ({ loginParam, successFn, failFn, errorFn }) => {
    try {
      const res = await loginPost({ loginParam, successFn, failFn, errorFn });
      return res;
    } catch (error) {
      console.log(error);
      throw error; // 예외를 다시 던져서 실패 처리를 수행하도록 함
    }
  },
);

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("rt");
  return memberInfo ? JSON.parse(memberInfo) : null; // 문자열을 객체로 변환
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      console.log("login");
      console.log("payload :", action.payload);
      return { ...state, result: action.payload.result }; // 상태 업데이트
    },
    logout: (state, action) => {
      console.log("logout");
      removeCookie("rt", "/");
      return { ...initState };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        console.log("fulfilled");
        console.log("payload :", payload);
        if (!payload.error) {
          setCookie("rt", JSON.stringify(payload));
        }
        console.log("체크용 :", { ...state, ...payload });
        return { ...state, ...payload }; // 상태 업데이트
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending");
        // 필요에 따라 로딩 상태를 업데이트할 수 있음
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("reject");
        // 필요에 따라 실패 상태를 업데이트할 수 있음
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
