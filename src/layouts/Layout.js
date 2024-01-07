import React from "react";
import Navigation from "../components/header/Navigation";
import Footer from "../components/footer/Footer";

// 각 page에는 BasicLayout을 이용하여 children을 쓰자
// 객체구조분해할당 {children : children} = props.children
const Layout = ({ children }) => {
  return (
    <div className="wrap">
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
