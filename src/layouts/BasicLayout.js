import React from "react";
import BasicMenu from "../components/menus/BasicMenu";

// 객체 구조 분해 할당
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
