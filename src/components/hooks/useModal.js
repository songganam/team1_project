import React, { useState } from "react";

// 모달 창 열림, 닫힘 관리
const useModal = () => {
  const [useResultModal, setUseResultModal] = useState(false);

  // 창 열림
  const openModal = () => {
    setUseResultModal(true);
  };

  // 창 닫힘
  const closeModal = () => {
    setUseResultModal(false);
  };

  return { useResultModal, openModal, closeModal };
};

export default useModal;
