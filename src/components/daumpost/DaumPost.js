import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

const DaumPost = ({ onClose, onComplete }) => {
  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    const fullAddress = data.address;
    const extraAddress =
      data.addressType === "R" ? data.bname + " " + data.buildingName : "";
    const newAddress = fullAddress + " " + extraAddress;

    onClose();
    onComplete(newAddress);
  };

  React.useEffect(() => {
    open({ onComplete: handleComplete });
  }, [open]);

  return null;
};

export default DaumPost;
