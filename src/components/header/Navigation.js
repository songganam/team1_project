import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/main">로고</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/main">고기-로</Link>
        </li>
        <li>
          <Link to="/gogi">고깃집찾기</Link>
        </li>
        <li>
          <Link to="/mart">정육점찾기</Link>
        </li>
        <li>
          <Link to="/community">고기잡담</Link>
        </li>
        <li>
          <Link to="/sale">마감세일</Link>
        </li>
        <li>
          <Link to="/my">마이페이지</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/join">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
