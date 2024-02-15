import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useEmptyModal() {
  const [isEmptyModal, setIsEmptyModal] = useState({
    isOpen: false,
    content: "",
  });
  const navgate = useNavigate();

  const openEmptyModal = content => {
    setIsEmptyModal({ isOpen: true, content });
  };

  const closeEmptyModal = () => {
    setIsEmptyModal(prev => ({ ...prev, isOpen: false }));
  };

  return { isEmptyModal, openEmptyModal, closeEmptyModal };
}

export default useEmptyModal;
