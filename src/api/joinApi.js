import axios from "axios";
export const API_SERVER_HOST = "";
const signHost = `${API_SERVER_HOST}/api/user`;
export const postJadd = async iJadd => {
  console.log("회원정보임", iJadd);
  try {
    const response = await axios.post(`${signHost}/signup`, iJadd);
  } catch (error) {
    console.log(error);
  }
};

export const nickNameCheck = async ({ iNickCheck }) => {
  console.log("닉네임중복체크", iNickCheck);
  const nickname = iNickCheck;
  try {
    const response = await axios.post(`${signHost}/signup/${nickname}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
