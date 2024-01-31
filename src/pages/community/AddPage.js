import React from "react";
import Add from "../../components/community/Add";
import TitleHeader from "../../components/titleheader/TitleHeader";

// 글 쓰기 페이지입니다.
const AddPage = () => {
  return (
    <div>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/community_header_2.png`}
        tname="고기잡담"
        tcontent='"인생은 고기서 고기다"'
      />
      <Add />
    </div>
  );
};

export default AddPage;
