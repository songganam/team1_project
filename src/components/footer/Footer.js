import React from "react";
import { ColorStyle } from "../../styles/common/CommonStyle";
import { ContentStyle, FooterStyle, LineStyle } from "./styles/FooterStyle";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleClickSupervisorSignin = () => {
    navigate("/svisor/signin");
  };
  return (
    <footer style={{ position: "relative" }}>
      <FooterStyle background={ColorStyle.g700} color={ColorStyle.grayScale}>
        <ul>
          <li>고객센터: 053-123-4567</li>
          <li>시스템장애신고: 053-890-1234</li>
          <li>상담시간: 09:00 ~ 11:30 / 12:30 ~ 18:00 (토,일 공휴일 휴무)</li>
          <li>무통장입금: 고기뱅크 053-456-799202</li>
        </ul>
      </FooterStyle>
      <div style={{ background: "#c2c2c2", paddingBottom: "33px" }}>
        <FooterStyle fontWeight="bold" color={ColorStyle.g900}>
          <ul>
            <li>회사소개</li>
            <li>이용약관</li>
            <li>개인정보취급방침</li>
            <li>이메일무단수집거부</li>
            <li>사이트운영정책</li>
            <li>유료서비스이용약관</li>
            <li>법적고지</li>
            <li>전문가윤리강령</li>
          </ul>
        </FooterStyle>
        <LineStyle />
        <div>
          <ContentStyle
            fontWeight="bold"
            color={ColorStyle.g900}
            marginTop="21px"
          >
            <ul>
              <li>(주)고기로</li>
            </ul>
          </ContentStyle>
          <ContentStyle color={ColorStyle.g800}>
            <ul>
              <li>대표자: 김고기</li>
              <li>등록번호: 123-45-6789</li>
              <li>통신판매업신고: 2024-대구중구-0001호</li>
              <li>정보보호 책임자: 김고기 gogi@greenart.co.kr</li>
            </ul>
          </ContentStyle>
          <ContentStyle color={ColorStyle.g800} marginTop="1vw">
            <ul>
              <li>
                대구광역시 중구 고기로 92길, 고기 192호(남산동,
                고기폴리스지식산업센터)
              </li>
              <li>호스팅서비스 제공업체: 고기요</li>
            </ul>
          </ContentStyle>
          <ContentStyle color={ColorStyle.g800}>
            <ul>
              <li>Copyright Gogi-ro. All rights reserved.</li>
            </ul>
          </ContentStyle>
          <ContentStyle color={ColorStyle.p500} fontWeight="bold">
            <ul>
              <li>
                본 사이트에서 제공되는 모든 정보는 고깃집을 고르는 데
                참고자료이며, 서비스 이용에 따른 최종 책임은 이용자에게
                있습니다.
              </li>
            </ul>
            <button onClick={handleClickSupervisorSignin}>관리자 로그인</button>
          </ContentStyle>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
