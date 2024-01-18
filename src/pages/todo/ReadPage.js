import React from "react";
import { useParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  // params 알아내기
  const { tno } = useParams();
  return (
    <div>
      읽기 화면 {tno}
      <ReadComponent tno={tno} />
    </div>
  );
};

export default ReadPage;
