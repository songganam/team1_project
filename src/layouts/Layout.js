import React from "react";
import Navigation from "../components/header/Navigation";

// 각 page에는 BasicLayout을 이용하여 children을 쓰자
// 객체구조분해할당 {children : children} = props.children
const Layout = ({ children }) => {
  return (
    <div className="wrap">
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>하단</footer>
    </div>
  );
};

export default Layout;
