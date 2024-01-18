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
