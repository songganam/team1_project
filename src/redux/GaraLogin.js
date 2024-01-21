import React, { useState } from "react";
import axios from "axios";

function ImageUploader() {
  const [pic, setPic] = useState([]);

  const handleImageChange = e => {
    const files = e.target.files;

    if (files.length + pic.length > 5) {
      alert("최대 5개의 이미지만 업로드 가능합니다.");
      return;
    }

    const updatedPic = [...pic];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageUrl = URL.createObjectURL(file);
      updatedPic.push(imageUrl);
    }

    setPic(updatedPic);
  };

  const handleDeleteImage = index => {
    setPic(pic.filter((_, i) => i !== index));
  };

  const uploadImages = async () => {
    const formData = new FormData();

    pic.forEach((image, index) => {
      formData.append(`image${index}`, image);
      console.log("보낼 데이터 : ", pic);
    });

    try {
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    const handleClick = () => {};
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      {pic.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`pic${index}`} />
          <button onClick={() => handleDeleteImage(index)}>Delete</button>
        </div>
      ))}
      <button
        onClick={uploadImages}
        style={{ width: "300px", height: "300px" }}
      >
        Upload
      </button>
    </div>
  );
}

export default ImageUploader;
