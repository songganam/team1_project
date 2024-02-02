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
`;

export const UploadButton = styled.div`
  position: absolute;
  left: 77%;
  top: 77%;
  width: 56px !important;
  height: 56px !important;
  border: none;
  border-radius: 250px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 30px;
    object-fit: contain;
    margin-top: 12px;
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
  p {
    margin-top: 15px;
    font-weight: 600;
  }
  span {
    position: relative;
    font-size: 17px;
    padding: 20px 0 19px 0;
    border: none;
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
  button {
    position: absolute;
    z-index: 1;
    left: 83%;
  }
  p {
    margin-top: 20px;
    font-weight: 600;
  }
  span {
    margin-top: 10px;
    font-size: 16px;
  }
  input {
    position: relative;
    font-size: 17px;
    padding: 20px 0 19px 0;
    background-color: none;
    border: none;
    border-bottom: 1px solid #000;
  }
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
