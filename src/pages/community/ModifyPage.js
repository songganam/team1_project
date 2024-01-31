import React from "react";
import Modify from "../../components/community/Modify";
import TitleHeader from "../../components/titleheader/TitleHeader";

const ModifyPage = () => {
  return (
    <div>
      <TitleHeader
        timg={`${process.env.PUBLIC_URL}/assets/images/community_header_3.png`}
        tname="고기잡담"
        tcontent='"인생은 고기서 고기다"'
      />
      <Modify />
    </div>
  );
};

export default ModifyPage;
