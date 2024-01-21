import { useState } from "react";

function useModal() {
  const [isModal, setIsModal] = useState({
    isOpen: false,
    title: "",
    content: "",
    callFn: null,
  });

  const openModal = (title, content, callFn) => {
    setIsModal({ isOpen: true, title, content, callFn });
  };

  const closeModal = () => {
    setIsModal(prev => ({ ...prev, isOpen: false }));
  };

  return { isModal, openModal, closeModal };
}

export default useModal;
