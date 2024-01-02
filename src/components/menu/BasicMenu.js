import React from "react";
import { Link } from "react-router-dom";

const BasicMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BasicMenu;
