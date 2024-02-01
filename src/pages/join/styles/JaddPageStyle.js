import styled from "@emotion/styled";
import { ColorStyle } from "../../../styles/common/CommonStyle";

export const JaddPageWrap = styled.div`
  position: relative;
  display: block;
`;

export const JaddPageMain = styled.div`
  display: flex;
  font-size: 19px;
  flex-direction: column;
  flex-wrap: wrap; /* 아이템을 여러 줄에 걸쳐 배치 */
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center;
  padding-top: 140px;
`;
export const JaddPageImage = styled.div`
  .inputBox {
    position: relative;
    width: 280px;
    height: 280px;
  }
  .previewBox {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: #066e52;
    width: 280px;
    height: 280px;
    border-radius: 250px;
  }
`;
export const ImgSelectBtn = styled.button`
  position: absolute;
  right: 0;
  width: 68px;
  height: 68px;
  border-radius: 250px;
  border: none;
  cursor: pointer;
`;

export const JaddPageInfo = styled.div`
  position: relative;
  display: flex;
  padding-top: 121px;
  padding-bottom: 180px;
  display: block;
  border: none;
  width: 500px;
`;
export const JaddMailWrap = styled.div`
  .JoinMail {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
  }
`;
export const JaddNameWrap = styled.div`
  .JaddName {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
  }
`;

export const JaddPwWrap = styled.div`
  .JaddPw {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    border: none;
    width: 100%;
    border-bottom: 1px solid #000000;
  }
`;
export const JaddMorePwWrap = styled.div`
  .JaddMorePw {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    border: none;
    width: 100%;
    border-bottom: 1px solid #000000;
  }
  .passCheck {
    padding-top: 10px;
    font-size: 14px;
    color: #d60117;
  }
`;
export const JaddGenderWrap = styled.div`
  .JaddGender {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0 19px 0;
    width: 100%;
    border: none;
    background-color: #ffffff;
    border-bottom: 1px solid #000000;
  }
`;
export const GenderBtWrap = styled.div`
  position: relative;
  display: flex;
  font-family: "DAEAM_LEE_TAE_JOON";
  right: 0;
  .gender-bt-man {
    color: #d60117;
    margin-right: 10px;
  }
  .gender-bt-woman {
    color: #d60117;
  }
`;

export const JaddNickNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .nicknameCheck {
    padding-top: 10px;
    font-size: 14px;
    color: #d60117;
    
  }
`;

export const JaddNickNameInner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #000000;

  .JaddNickName {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    border: none;
    width: 100%;
  }
  .JaddNickName-Bt {
    position: absolute;
    font-family: "DAEAM_LEE_TAE_JOON";
    color: #d60117;
    right: 0;
  }
`;
export const NicknameCheck = styled.div`
  font-size: 14px;
`;

export const JaddBirthWrap = styled.div`
  .JaddBirth {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
  }
`;

export const JaddNumberWrap = styled.div`
  .JaddNumber {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    border: none;
    width: 100%;
    border-bottom: 1px solid #000000;
  }
`;

export const JaddAddressWrap = styled.div`
  .JaddAddress {
    position: relative;
    font-size: 14px;
    padding: 20px 0 19px 0;
    border: none;
    width: 100%;
    border-bottom: 1px solid #000000;
  }
`;

export const JaddAddressBts = styled.div`
  font-family: "DAEAM_LEE_TAE_JOON";
  position: relative;
  display: block;
  padding-top: 97px;

  .Jadd-Join-Bt {
    width: 100%;
    height: 55px;
    color: #d60117;
    margin-bottom: 20px;
  }
  .Jadd-Cancel-Bt {
    position: relative;
    border: 1px solid #066e52;
    border-radius: 10px;
    color: #ffffff;
    background-color: #066e52;
    width: 500px;
    height: 55px;
  }
`;
export const DefaultBt = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  background: #fff;
  border: 2px solid #066e52;
  border-radius: 10px;
  background-color: ${({ clicked }) =>
    clicked ? ColorStyle.secondary : ColorStyle.grayScale};
  cursor: pointer;
  span {
    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    color: ${({ clicked }) =>
      clicked ? ColorStyle.grayScale : ColorStyle.primary};
  }
`;
