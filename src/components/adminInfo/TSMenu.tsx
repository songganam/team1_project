import { TSMenuStyle } from "./styles/TSMenuStyle";

const TSMenu = () => {
  return (
    <TSMenuStyle>
      <div className="menu-img">
        <img src={`${process.env.PUBLIC_URL}/assets/images/menuImg.png`} />
      </div>
      <div className="menu-info">
        <div>갈비살 [500g]</div>
        <div>38,000원</div>
      </div>
    </TSMenuStyle>
  );
};

export default TSMenu;
