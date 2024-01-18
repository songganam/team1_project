import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginPostAsync } from "../../slices/loginSlice";

// 초기값
const initState = {
  email: "user0@aaa.com",
  pw: "1111",
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
  const handleClick = e => {
    // loginSlice 의  state 업데이트
    // dispatch(login(loginParam));
    dispatch(loginPostAsync({ loginParam, successFn, failFn, errorFn }));
  };

  const successFn = result => {
    // loginSlice 의  state 업데이트
    dispatch(login({ ...result }));
    console.log(result);
  };

  const failFn = result => {
    console.log(result);
  };

  const errorFn = result => {
    console.log(result);
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
