import axios from "axios";
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;

export const postJadd = async ({ product, successFn, failFn, errorFn }) => {
  console.log("회원정보임", product);
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.post(`${signHost}/signup`, product, header);
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      successFn(response.data);
    } else {
      failFn("글 등록 오류", response.statusText);
    }
  } catch (error) {
    console.log("글 등록 서버오류", error.response.data);
    errorFn("글 등록 서버오류", error.response.data);
  }
};

export const nickNameCheck = async ({
  iNickCheck,
  successNickFn,
  failNickFn,
  errorNickFn,
}) => {
  console.log("닉네임중복체크", iNickCheck);
  const nickname = iNickCheck;
  try {
    const response = await axios.post(`${signHost}/signup/${nickname}`);
    if (response.status === 200) {
      successNickFn(response.data);
    } else if (response.status === 400) {
      console.log("dddd");
      failNickFn("에러다.");
    }
  } catch (error) {
    errorNickFn(error);
  }
};
