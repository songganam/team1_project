import { AboutCardButton, AboutCardWrap } from "../../pages/main/styles/AboutPageStyle";
import { DefaultBt } from "../button/styles/ButtonStyle";

const AboutCard = () => {
  return (
    <AboutCardWrap>
    <img className="AboutCardImg" />
    <div className="AboutCardTitle"></div>
    <div className="AboutCardPrice"></div>
    <AboutCardButton>
      <DefaultBt className="InfoButton"></DefaultBt>
      <DefaultBt className="BookButton"></DefaultBt>
    </AboutCardButton>
  </AboutCardWrap>
  );
};

export default AboutCard;