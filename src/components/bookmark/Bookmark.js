import React, { useState } from "react";
import { Bookmarkbt } from "./styles/BookmarkStyle";

// 북마크 버튼 컴포넌트
const Bookmark = () => {
  const [isFull, setIsFull] = useState(false);

  const toggleBookmark = () => setIsFull(prev => !prev);

  return (
    <Bookmarkbt onClick={toggleBookmark}>
      {isFull ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/bookmark_full.svg`}
        ></img>
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/bookmark_null.svg`}
        ></img>
      )}
    </Bookmarkbt>
  );
};

export default Bookmark;
