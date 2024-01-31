import React, { useRef, useState } from "react";
import Button from "../components/button/Button";
// import Button from "./Button"; // Button 컴포넌트를 import 합니다.

function ImageUpload() {

  
  const uploadRef = useRef();
  const [image, setImage] = useState(null); // 단일 이미지를 저장하는 상태를 사용합니다.

  const handleClickImg = () => {
    uploadRef.current.click();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const deleteImage = () => {
    setImage(null);
  };

  return (
    <div>
      <div onClick={handleClickImg}>
        <Button bttext="사진추가" />
      </div>
      <div className="inputBox">
        <input
          type="file"
          ref={uploadRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <div className="previewBox">
          {image && (
            <img
              src={image}
              alt={`미리보기`}
              style={{
                maxWidth: "60px",
                margin: "5px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
              onClick={deleteImage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
