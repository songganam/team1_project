import { useState } from "react";
import Fetching from "../common/Fetching";

const BlurredImage: React.FC<{ src: string; alt: string; host: string }> = ({
  src,
  alt,
  host,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img
        alt={alt}
        src={`${host}${src}`}
        style={{
          width: "100%",
          height: "100%",
          filter: loading ? "blur(20px)" : "none",
          transition: "filter 0.3s ease",
        }}
        onLoad={() => setLoading(false)}
      />
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Fetching />
        </div>
      )}
    </div>
  );
};

export default BlurredImage;
