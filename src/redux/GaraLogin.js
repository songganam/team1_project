import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginPostAsync } from "./loginSlice";
import useCustomLogin from "../components/meat/hooks/useCustomLogin";
const initState = {
  email: "",
  upw: "",
};

const GaraLogin = () => {
  const navigate = useNavigate();
  const [loginParam, setLoginParam] = useState(initState);
  const handleChange = e => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };
  const { doLogin, moveToPath } = useCustomLogin();
  const dispatch = useDispatch();

  const handleClick = e => {
    doLogin({ loginParam, successFn, failFn, errorFn });
  };
  const successFn = result => {
    console.log(result);
    moveToPath("/");
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
            name="upw"
            value={loginParam.upw}
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
