import React, { useState } from "react";
import { useDispatch } from "react-redux";




const initState = {
  email: "",
  upw: "",
};

const GaraLogin = () => {
  const [signinParam, setSigninParam] = useState(initState);

  const handleChange = e => {
    signinParam[e.target.name] = e.target.value;
    setSigninParam({ ...signinParam });
  };

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch;
  };

  return (
    <div>
      <div>
        <div>이메일</div>
        <div>
          <input
            type="email"
            name="email"
            value={signinParam.email}
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
            value={signinParam.upw}
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
