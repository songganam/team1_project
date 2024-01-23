import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useCustomLogin from "../components/meat/hooks/useCustomLogin";

const initState = {
  email: "",
  upw: "",
};
const GaraLogin = () => {
  const [authParam, setAuthParam] = useState(initState);
  const { doLogin, moveToPath } = useCustomLogin();
  const handleChange = e => {
    authParam[e.target.name] = e.target.value;
    setAuthParam({ ...authParam });
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    doLogin({ authParam, successFn, failFn, errorFn });
  };

  const successFn = result => {
    console.log("성공", result);
    moveToPath("/meat/detail/3");
  };

  const failFn = result => {
    console.log("실패", result);
    alert("이메일 및 비밀번호 확인하세요.");
  };

  const errorFn = result => {
    console.log("서버 에러", result);
  };
  return (
    <div>
      <div>
        <div>이메일</div>
        <div>
          <input
            type="email"
            name="email"
            value={authParam.email}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>

      <div>
        <div>비밀번호</div>
        <div>
          <input
            type="password"
            name="upw"
            value={authParam.upw}
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

export default GaraLogin;
