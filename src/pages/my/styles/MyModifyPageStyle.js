import styled from "@emotion/styled";

export const MyModifyPageWrapper = styled.div`
  position: relative;
`;

export const MyModifyPageTitle = styled.div`
  position: relative;
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 50px;
`;

export const MyModifyPageProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.div`
  position: relative;
  img {
    width: 280px;
    height: 280px;
    border-radius: 250px;
  }
  button {
    position: absolute;
    left: 77%;
    top: 77%;
    width: 56px;
    height: 56px;
    border: none;
    border-radius: 250px;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
    img {
      width: 100%;
      height: 30px;
      object-fit: fill;
    }
  }
`;

export const MyNickName = styled.div`
  position: relative;
  font-family: DAEAM_LEE_TAE_JOON;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  margin-top: 20px;
`;

export const MyModifyPageInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  margin-top: 50px;
  span {
    margin-bottom: 20px;
  }
`;

export const MyModifyPageForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  span {
    margin-bottom: 20px;
  }
  input {
    border: none;
    border-bottom: 1px solid #000;
    background-color: none;
    margin-bottom: 20px;
  }
`;

export const MyMoidfyNicknameCheck = styled.div`
  font-size: 14px;
`;

export const MyModifyPageButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  button {
    width: 265px !important;
  }
`;
