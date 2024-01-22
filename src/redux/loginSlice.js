import { createSlice } from "@reduxjs/toolkit";

// API 서버 연동
// reducer (store 상태 변경) 를 호출할때 지금은 API 호출
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postUser } from "../api/meatApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

// export const 외부함수 = createAsyncThunk("이름", 리듀서함수);
export const loginPostAsync = createAsyncThunk(
  "loginPostAsync",
  async ({ loginParam, successFn, failFn, errorFn }) => {
    try {
      const res = await postUser({ loginParam, successFn, failFn, errorFn });

      // 결과값을 리턴을 해야 action 에 값이 담기지...
      return res;
    } catch (error) {
      return error;
    }
  },
);

const initState = {
  email: "",
};

// 쿠키 정보 읽어와서 initState 변경하기
const loadMemberCookie = () => {
  const memberInfo = getCookie("rt");
  return memberInfo;
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,

  // store 의 state 를 업데이트 하는 함수 모음
  reducers: {
    login: (state, action) => {
      console.log("login.....");
      return { email: action.payload.email };
    },
    // 로그아웃
    logout: (state, action) => {
      console.log("logout.....");
      removeCookie("rt", "/");
      return { ...initState };
    },
  },
  // 외부 API 연동을 통해 store 의 state 를 업데이트 함수 모음
  extraReducers: bulder => {
    bulder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        // 외부 연동 성공
        // state : 기존 값(store 의 loginSate)
        // action : 받아온 값
        console.log("fulfilled");
        // console.log(action);
        const payload = action.payload;
        console.log("payload", payload);
        if (!payload.error) {
          // 이때 필요한 정보를 보관한다.
          // 쿠키는 문자열입니다. 객체를 JSON 문자로 변환
          setCookie("rt", JSON.stringify(payload));
        }
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        // 외부 연동 시도중..
        // state : 기존 값(store 의 loginSate)
        // action : 받아온 값
        console.log("pending");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        // 외부 연동 실패
        // state : 기존 값(store 의 loginSate)
        // action : 받아온 값
        console.log("rejected");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
