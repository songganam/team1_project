import React from "react";
import { DefaultBt } from "./styles/ButtonStyle";

const Button = props => {
  const { bttext } = props;

  return (
    <DefaultBt>
      <span>{bttext}</span>
    </DefaultBt>
  );
};

export default Button;
