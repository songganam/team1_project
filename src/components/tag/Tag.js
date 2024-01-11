import React from "react";
import { TagStyle } from "./styles/TagStyle";

const Tag = props => {
  const { tagtext } = props;

  return (
    <TagStyle>
      <span>{tagtext}</span>
    </TagStyle>
  );
};

export default Tag;
