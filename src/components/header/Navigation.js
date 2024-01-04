import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">로고</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
        <li>
          <Link to="/gogi">고깃집찾기</Link>
        </li>
        <li>
          <Link to="/mart">정육점찾기</Link>
        </li>
        <li>
          <Link to="/community">커뮤니티</Link>
        </li>
        <li>
          <Link to="/sale">마감세일</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
