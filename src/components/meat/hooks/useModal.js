import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useModal() {
  const [isModal, setIsModal] = useState({
    isOpen: false,
    title: "",
    content: "",
    callFn: null,
  });
  const navgate = useNavigate();

  const openModal = (title, content, callFn) => {
    setIsModal({ isOpen: true, title, content, callFn });
  };

  const closeModal = () => {
    setIsModal(prev => ({ ...prev, isOpen: false }));
  };
  const shutModal = () => {
    setIsModal(prev => ({ ...prev, isOpen: false }));
  };
  const moveToLogin = () => {
    setIsModal(prev => ({ ...prev, isOpen: false }));
    navgate("/login");
  };

  return { isModal, openModal, closeModal, moveToLogin, shutModal };
}

export default useModal;
