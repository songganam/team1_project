import { FadeLoader } from "react-spinners";
import { ColorStyle } from "../../styles/common/CommonStyle";

const LargeImageWireframe = () => {
  const laodingCss = {
    position: "relative",
    width: "480px",
    height: "480px",
    background: "rgba(255,255,255,0.8)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  };
  return (
    <div style={laodingCss}>
      <FadeLoader size={50} color={ColorStyle.g200} loading={true} />
    </div>
  );
};

export default LargeImageWireframe;
