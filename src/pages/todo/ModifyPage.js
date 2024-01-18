import React from "react";
import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage = () => {
  const { tno } = useParams();
  return (
    <div>
      ModifyPage 글 번호 {tno}
      <ModifyComponent tno={tno}/>
    </div>
  );
};

export default ModifyPage;
