import axios from "axios";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// 마이페이지 : 예약 내역 가져오기
export const getMyBook = async ({ param, successFn, failFn, errorFn }) => {
  try {
    // const res = await axios.get(`${host}/user/reservation`, { params: param });
    const res = await axios.get("/json/mybook.json", {
      params: param,
    });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("예약 내역 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버에러");
  }
};

// 마이페이지 : 유저 정보 가져오기
export const getUserProfile = async setProfileData => {
  try {
    const res = await axios.get(`${host}/user`);
    setProfileData(res.data);
    console.log("들어왔냐?");
  } catch (error) {
    console.log(error);
    console.log("안들어왔따");
  }
};
