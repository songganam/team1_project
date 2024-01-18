# Redux-toolkit

- 전역(React) 상태(State) 관리 도구
- \***\* State 가 바뀌면 화면이 바뀝니다. \*\***

## 1. state 배치 가능 장소

- 컴포넌트 : useState, useEffect 관리
- 리액트앱 전체 : index.js 또는 App.js 에서 관리가 된다. (전역상태관리)

## 2. Redux-toolkit

- 규칙대로 적용해 보자.
- 1번만 적용이 가능합니다.
- 데이터를 보관하는 저장소 1개만 있습니다.
- 데이터 보관장소를 "스토어" 라고 합니다.
- "스토어"에 데이터가 전역 State 입니다.
- 스토어를 1개 만들면서 시작됩니다.
- 스토어를 수정하려면 스토어 수정 전용 함수가 필요합니다.
- 하나의 저장소 즉, 스토어를 공유하기 때문에 문제가 생길 소지가 높아요.
- 마음대로 스토어를 변경할 수 없어요.
- 그래서 스토어를 접근할 수있는 특별한 함수가 주어집니다.
- 이 함수를 리듀서라고 명칭을 지었어요.
- 리듀서는 스토어에 접근할 수 있는 함수 입니다.
- CRUD 가 가능

## 3. Redux-toolkit 적용하기 순서

- 3.1. 설치

  `npm install @reduxjs/toolkit react-redux `

- 3.2. package.json 확인

- 3.3. store 를 생성한다. (전역 state 보관 장소)

  : /src/store.js 파일 생성

  ```js
  import { configureStore } from "@reduxjs/toolkit";
  // store 가 공용 데이터 보관장소, state 입니다.
  export default configureStore({
    reducer: {},
  });
  ```

- 3.4. 앱 전체에 적용가능하도록 셋팅
  : App.js 적용 또는 index.js 적용
  : 개인적으로 index.js 적용을 선호
  : /src/index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 공급을 한다. store 를 공급한다.
import { Provider } from "react-redux";
// 저장소 (전역)
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

- 3.5. 로그인 Reducer 생성
  : 로그인 정보를 store 에 관리
  : 각 컴포넌트는 로그인정보를 활용
  : 스토어를 기능별로 쪼개서 활용(슬라이스)
  : 로그인 기능 조각을 스토어에서 관리한다.
  : 많은 개발자들이 reducers 폴더 만들기도 하고
  : 많은 개발자들이 slices 폴더 만들어서 관리하기도해요.
  : /src/slices 폴더
  : /src/slices/loginSlice.js 생성

  ```js
  import { createSlice } from "@reduxjs/toolkit";
  // store 를 분할해서 Slice 를 만들겠다.
  // 저장해둘 초기 값
  const initState = {
    email: "",
  };
  const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initState,
    // 로그인슬라이스에 내용을 갱신함수
    // 로그인 슬라이스에 값에 접근을 해서
    // CRUD
    reducers: {
      // 로그인
      login: () => {
        console.log("login.....");
      },
      // 로그아웃
      logout: () => {
        console.log("logout.....");
      },
    },
  });
  // 슬라이스를 업데이트 해 주는 함수 내보내기
  export const { login, logout } = loginSlice.actions;

  // 외부에서 사용하도록 export 합니다.
  // 아래는 그대로 사용하셔야 해요.
  // reducer 라고 내보내야해요.
  // 특히 조심하셔야 해요.
  export default loginSlice.reducer;
  ```

- 3.6. 슬라이스를 스토어에 등록하기
  /src/store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
// store 가 공용 데이터 보관장소, state 입니다.
export default configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});
```

## 4. 상태값 읽기

- useSelector(state => state.슬라이스명)
- /src/components/menus/BasicMenu.js

```js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BasicMenu = () => {
  // 로그인 슬라이스에서 email 읽는다.
  // loginSlice 값을 읽으려고 접근하기
  const loginState = useSelector(state => state.loginSlice);
  console.log(loginState);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* 로그인 상태 체크 후 내용 출력 */}
        {loginState.email ? (
          <>
            <li>
              <Link to="/todo/">Todo</Link>
            </li>
            <li>
              <Link to="/product/">Product</Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default BasicMenu;
```

## 5. 회원 페이지 만들기

- /src/pages/members 폴더 만들기
- /src/pages/members/MemberPage.js 폴더 만들기

```js
import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet } from "react-router-dom";

const MemberPage = () => {
  return (
    <BasicLayout>
      <h1>회원기능</h1>
      <Outlet />
    </BasicLayout>
  );
};

export default MemberPage;
```

### 5.1. 로그인 페이지

- /src/pages/members/LoginPage.js

```js
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <div>로그인 폼</div>
    </div>
  );
};

export default LoginPage;
```

### 5.2. 실제 로그인 기능 만들기

- /src/components/member 폴더 / LoginComponents.js

```js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";

// 초기값
const initState = {
  email: "",
  pw: "",
};
const LoginComponents = () => {
  const [loginParam, setLoginParam] = useState(initState);
  const handleChange = e => {
    // e.target.name
    // e.target.value
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };
  // slice 값(state)을 읽을때        useSelector
  // slice 값(state)를 업데이트할때  useDispatch()
  const dispatch = useDispatch();
  const handleClick = () => {
    // loginSlice 의  state 업데이트
    dispatch(login(loginParam));
  };
  return (
    <div>
      <div>
        <div>이메일</div>
        <div>
          <input
            type="email"
            name="email"
            value={loginParam.email}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>

      <div>
        <div>비밀번호</div>
        <div>
          <input
            type="password"
            name="pw"
            value={loginParam.pw}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>

      <div>
        <button onClick={handleClick}>로그인</button>
      </div>
    </div>
  );
};

export default LoginComponents;
```

## 5.3. 로그인 업데이트

- /src/slices/loginSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
// store 를 분할해서 Slice 를 만들겠다.
// 저장해둘 초기 값
const initState = {
  email: "",
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  // 로그인슬라이스에 내용을 갱신함수
  // 로그인 슬라이스에 값에 접근을 해서
  // CRUD
  reducers: {
    // 로그인
    // 무조건 2개만 들어올 수 있어요.
    login: (state, action) => {
      console.log("login.....");
      console.log(action.payload);
      // redux 상태 업데이트
      return { email: action.payload.eamil };
    },
    // 로그아웃
    logout: (state, action) => {
      console.log("logout.....");
    },
  },
});

// 슬라이스를 업데이트 해 주는 함수 내보내기
export const { login, logout } = loginSlice.actions;

// 외부에서 사용하도록 export 합니다.
// 아래는 그대로 사용하셔야 해요.
// reducer 라고 내보내야해요.
// 특히 조심하셔야 해요.
export default loginSlice.reducer;
```

## 5.4. 메뉴에 로그인/로그아웃 적용하기

- src/components/menus/BasicMenu.js

```js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BasicMenu = () => {
  // 로그인 슬라이스에서 email 읽는다.
  // loginSlice 값을 읽으려고 접근하기
  const loginState = useSelector(state => state.loginSlice);
  console.log(loginState);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* 로그인 상태 체크 후 내용 출력 */}
        {loginState.email ? (
          <>
            <li>
              <Link to="/todo/">Todo</Link>
            </li>
            <li>
              <Link to="/product/">Product</Link>
            </li>
          </>
        ) : null}
      </ul>

      {/* 로그인 / 로그아웃버튼  */}
      <div>
        {loginState.email ? (
          <Link to="/member/logout">로그아웃</Link>
        ) : (
          <Link to="/member/login">로그인</Link>
        )}
      </div>
    </nav>
  );
};

export default BasicMenu;
```

- 로그 아웃 페이지
- /src/pages/members/LogoutPage.js

```js
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/loginSlice";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>로그아웃하시겠습니까?</h2>
      <div>
        <button onClick={handleClick}>로그아웃</button>
      </div>
    </div>
  );
};

export default LogoutPage;
```

- 로그 아웃 슬라이스 업데이트

```js
import { createSlice } from "@reduxjs/toolkit";
const initState = {
  email: "",
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("login.....");
      return { email: action.payload.email };
    },
    // 로그아웃
    logout: (state, action) => {
      console.log("logout.....");
      return { ...initState };
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
```

## 6. Redux-toolkit 서버연동 store 변경하기

- 기존은 그냥 리액트에서 로컬 store 관리
- 실제는 백엔드 API 서버와 연동한 결과를 store 관리필요
- Redux 는 API 연동하려면 Redux Saga(리덕스 사가)
- 또는 Redux Thunk(리덕스 성크) 등을 통해서만 가능했어요.
- 지금은 탑재된 createAsyncThunk 를 활용합니다.
- 리덕스의 목적은 상태관리를 앱서비스 차원에서 하겠다.
- 앱서비스를 API 연동해서 그 정보를 보관(state로 활용)하겠다.

### 6.1. API 백엔드 서버와 비동기 통신하기

- /src/api/memberApi.js 파일 생성

```js
import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";
const host = `${API_SERVER_HOST}/api/member`;
// 로그인 하기 위한 정보보내기
// 결과 성공시 RTK 에 업데이트하기
// 일반적으로 post 로 전송합니다.
export const loginPost = async ({ loginParam, successFn, failFn, errorFn }) => {
  try {
    // 만약에 API 서버가 JSON 을 원한다면
    const header = { headers: { "Content-Type": "x-www-urlencoded" } };

    const formData = new FormData();
    // formData.append("이름", "값")
    formData.append("username", loginParam.email);
    formData.append("password", loginParam.pw);

    const res = await axios.post(`${host}/login`, formData, header);

    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      // 화면 처리용
      successFn(res.data);

      // RTK 업데이트 하기위해서는 리턴을 해서 값을 전달해야 해
      return res.data;
    } else {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. 서버가 불안정합니다.다시 시도해주세요.");
  }
};
```

### 6.2. 외부 연동

- loginSlice 에 외부연동 붙이기
- createAsyncThunk 와 extraReducers 를 활용
- /src/slices/loginSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

// API 서버 연동
// reducer (store 상태 변경) 를 호출할때 지금은 API 호출
import { loginPost } from "../api/memberApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const 외부함수 = createAsyncThunk("이름", 리듀서함수);
export const loginPostAsync = createAsyncThunk(
  "loginPostAsync",
  async ({ loginParam, successFn, failFn, errorFn }) => {
    try {
      const res = await loginPost({ loginParam, successFn, failFn, errorFn });

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
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,

  // store 의 state 를 업데이트 하는 함수 모음
  reducers: {
    login: (state, action) => {
      console.log("login.....");
      return { email: action.payload.email };
    },
    // 로그아웃
    logout: (state, action) => {
      console.log("logout.....");
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
        // if (!payload.error) {
        //   // 이때 필요한 정보를 보관한다.
        // }
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

loginSlice.js;
```

### 6.3. 호출은 useDispatch 로

- /src/components/member/LoginComponent.js

```js
// loginSlice 의  state 업데이트
// dispatch(login(loginParam));
dispatch(loginPostAsync({ loginParam, successFn, failFn, errorFn }));
```

### 6.4. 내용읽기 는 useSelect 로 변화없음