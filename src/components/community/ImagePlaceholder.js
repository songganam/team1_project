import { useState } from "react";

const ImagePlaceholder = ({ src, alt, placeholder, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* 여기에 와이어프레임 또는 placeholder 컴포넌트를 렌더링 */}
          {placeholder}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </>
  );
};

export default ImagePlaceholder;
