import React, { useState } from "react";
import useCustomHook from "../../components/meat/hooks/useCustomHook";

const initState = {
  bId: "",
  bPw: "",
  checkBpw: "",
  bNo: "",
  bName: "",
};
const AdminJoinPage = () => {
  // @COMMENT join-form-data , fetching state
  const [joinData, setJoinData] = useState(initState);
  const [ckeckFlag, setCheckFlag] = useState(false);
  const [fetch, setFetching] = useState(false);
  const {
    openModal,
    closeModal,
    isModal,
    isSelectModal,
    openSelectModal,
    cancelSelectModal,
    confirmSelectModal,
  } = useCustomHook();

  const handleChange = e => {
    setJoinData({ ...joinData, [e.target.name]: e.target.value });
  };

  // @COMMENT 사업자 등록이 완료되었다는 Flag

  const handleClickPost = () => {
    const data = {
      bId: joinData.bId,
      bPw: joinData.bPw,
      checkBpw: joinData.checkBpw,
      bNo: joinData.bNo,
      bName: joinData.bName,
    };
  };

  return (
    <div>
      <div>회원기입 폼</div>
      {/* 필요한 데이터 */}
      <label htmlFor="bId">
        <input type="text" name="bId" />
      </label>
    </div>
  );
};

export default AdminJoinPage;
