import React from "react";
import Read from "../../components/community/Read";
import TitleHeader from "../../components/titleheader/TitleHeader";

// 글 읽기 페이지입니다.
const ReadPage = () => {
  return (
    <div>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/community_header.png`}
        tname="고기잡담"
        tcontent='"인생은 고기서 고기다"'
      />
      <Read />
    </div>
  );
};

export default ReadPage;
