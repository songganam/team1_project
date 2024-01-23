import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

//! GET Meat List Page
export const getGList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await authAxios.get(`${host}/shop`, { params: param });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("목록 호출 성공");
      successFn(res.data);
    } else {
      failFn("목록 호출 오류");
    }
  } catch (error) {
    errorFn(error);
  }
};
// Auth test
export const getGInfo = async ({ ishop, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(`${host}/shop/${ishop}`, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("목록 호출 성공");
      successFn(res.data);
    } else {
      failFn("목록 호출 오류");
    }
  } catch (error) {
    errorFn(error);
  }
};

// ! POST Detail BookMark
export const postBookmarkStatus = async ({
  bookmark,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const res = await axios.post(`${host}`, bookmark);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("");
    }
  } catch (error) {
    errorFn(error);
  }
};

// ! Post Reservation (/gogi/reservation)
export const postReser = async ({ reserData, successFn, failFn, errorFn }) => {
  try {
    //
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.post(`${host}/reservation`, reserData, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("");
    }
  } catch (error) {
    errorFn("");
    //
  }
};

// ! GaraLogin
export const loginPost = async ({ authParam, successFn, failFn, errorFn }) => {
  try {
    // 만약에 API 서버가 JSON 을 원한다면
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      email: authParam.email,
      upw: authParam.upw,
    };
    const res = await axios.post(`${host}/user/signin`, data, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      // 화면 처리용
      // setCookie("rt", res.data.accessToken, 1);
      successFn(res.data);

      // RTK 업데이트 하기위해서는 리턴을 해서 값을 전달해야 해
      return res.data;
    } else {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. 서버가 불안정합니다.다시 시도해주세요.");
  }
};
export const changeBookmark = async storeNum => {
  try {
    //
    const data = {
      ishop: storeNum,
    };
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.post(`${host}/shop/bookmark`, data, header);
    console.log("check", res.data);
  } catch (error) {
    console.log(error);
    //
  }
};
