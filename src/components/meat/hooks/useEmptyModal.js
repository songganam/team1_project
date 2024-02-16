import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useEmptyModal() {
  const [isEmptyModal, setIsEmptyModal] = useState({
    isOpen: false,
    content: "",
    callFn: null,
  });
  const navgate = useNavigate();

  const openEmptyModal = (content, callFn) => {
    setIsEmptyModal({ isOpen: true, content, callFn });
  };

  const closeEmptyModal = () => {
    setIsEmptyModal(prev => ({ ...prev, isOpen: false }));
  };

  return { isEmptyModal, openEmptyModal, closeEmptyModal };
}

export default useEmptyModal;
