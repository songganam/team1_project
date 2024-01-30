import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useSelectModal() {
  const [isSelectModal, setIsSelectModal] = useState({
    isOpen: false,
    title: "",
    content: "",
    confirmFn: null,
    cancelFn: null,
  });
  const navgate = useNavigate();

  const openSelectModal = (title, content, confirmFn, cancelFn) => {
    setIsSelectModal({ isOpen: true, title, content, confirmFn, cancelFn });
  };

  const confirmSelectModal = () => {
    setIsSelectModal(prev => ({ ...prev, isOpen: false }));
  };

  const cancelSelectModal = () => {
    setIsSelectModal(prev => ({ ...prev, isOpen: false }));
  };

  return {
    isSelectModal,
    openSelectModal,
    confirmSelectModal,
    cancelSelectModal,
  };
}

export default useSelectModal;
