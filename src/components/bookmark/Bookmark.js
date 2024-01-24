import React, { useState } from "react";
import { Bookmarkbt } from "./styles/BookmarkStyle";

// 북마크 컴포넌트
const Bookmark = ({ isBook }) => {
  return (
    <Bookmarkbt>
      <img
        src={
          process.env.PUBLIC_URL +
          (isBook === 0
            ? "/assets/images/bk_no_check.png"
            : "/assets/images/bk_check.png")
        }
        alt={isBook === 1 ? "북마크 완료" : "북마크 해제"}
      />
    </Bookmarkbt>
  );
};

export default Bookmark;
