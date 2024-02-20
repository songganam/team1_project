import React from "react";
import { MenuStyle } from "./styles/MenuStyle";

const Menu = () => {
  return (
    <MenuStyle>
      <div className="menu-img">
        <img src={`${process.env.PUBLIC_URL}/assets/images/menuImg.png`} />
      </div>
      <div className="menu-info">
        <div>갈비살 [500g]</div>
        <div>38,000원</div>
      </div>
    </MenuStyle>
  );
};

export default Menu;
