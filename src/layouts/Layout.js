import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

// 각 page에는 BasicLayout을 이용하여 children을 쓰자
// 객체구조분해할당 {children : children} = props.children
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
