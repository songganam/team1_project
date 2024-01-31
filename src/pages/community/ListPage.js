import React from "react";
import List from "../../components/community/List";
import TitleHeader from "../../components/titleheader/TitleHeader";

// 글 목록 페이지입니다.
const ListPage = () => {
  return (
    <div>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/community_header_1.png`}
        tname="고기잡담"
        tcontent='"인생은 고기서 고기다"'
      />
      <List />
    </div>
  );
};

export default ListPage;
