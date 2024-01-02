import React from "react";
import BasicMenu from "../components/menu/BasicMenu";

// 각 page에는 BasicLayout을 이용하여 children을 쓰자
// 객체구조분해할당 {children : children} = props.children
const BasicLayout = ({ children }) => {
  return (
    <div className="wrap">
      <header>
        <BasicMenu />
      </header>
      <main>{children}</main>
      <footer>하단</footer>
    </div>
  );
};

export default BasicLayout;
