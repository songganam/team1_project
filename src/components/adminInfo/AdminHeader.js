import React from "react";
import { NavStyle } from "./styles/ModifyStyle";
import Button from "../button/Button";

const AdminHeader = ({ title }) => {
  return (
    <NavStyle>
      <div className="page-title">{title}</div>
      <div>
        <Button bttext="저장" />
      </div>
    </NavStyle>
  );
};

export default AdminHeader;
