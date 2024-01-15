import { MainGogiShop } from "../../pages/main/styles/AboutPageStyle";
import { DefaultBt } from "../button/styles/ButtonStyle";
import {
  AboutCardImg,
  AboutCardPrice,
  AboutCardTitle,
} from "./styles/AboutCardStyle";

const AboutCard = () => {
  return (
    <MainGogiShop>
    <div className="GogiShopTitle">오직 고기-로에서만</div>
    <img className="AboutCardImg" />
    <div className="AboutCardTitle">남문한우백화점 부림축산</div>
    <div className="AboutCardPrice">돼지양념갈비 10,000원~</div>
    <DefaultBt />
    <DefaultBt />
  </MainGogiShop>
  );
};
