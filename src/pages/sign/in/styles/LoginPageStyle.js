import styled from "@emotion/styled";

export const LoginPageWrap = styled.div`
  position: relative;
  display: block;
`;

export const LoginPageMain = styled.div`
  font-family: "DAEAM_LEE_TAE_JOON";
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; /* 아이템을 여러 줄에 걸쳐 배치 */
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center;
  padding-top: 140px;
  padding-bottom: 180px;
`;

export const LoginPageInfo = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  gap: 35px;
`;

export const LoginPageID = styled.input`
  position: relative;
  padding-bottom: 15px;
  display: block;
  width: 500px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #5c5c5c;
`;

export const LoginPagePW = styled.input`
  position: relative;
  padding-bottom: 15px;
  display: block;
  width: 500px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #5c5c5c;
`;

export const LoginCheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  padding-left: 8px;

  .RememberEmail {
    display: flex;
    font-size: 19px;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
  }
  .CheckBox {
    margin-right: 10px;
  }
`;

export const LoginPageBts = styled.div`
  position: relative;
  display: inline-flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  .Loginbutton {
    position: relative;
    border: 1px solid #066e52;
    font-size: 19px;
    color: #d60117;
    border-radius: 20px;
    background-color: #ffffff;
    width: 500px;
    height: 55px;
    padding: 10px 20px;
    cursor: pointer;
  }
  .Joinbutton {
    position: relative;
    border: 1px solid #066e52;
    font-size: 19px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #066e52;
    width: 500px;
    height: 55px;
    padding: 10px 20px;
    cursor: pointer;
  }
`;
