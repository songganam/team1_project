import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// 0이 아니면 로그인 0이면 로그아웃 상태 true = 로그아웃 상태 / false = 로그인 상태

//! GET Meat List Page
export const getGList = async ({ param, successFn, failFn, errorFn }) => {
  console.log("파라미터", param);
  try {
    const res = await axios.get(`${host}/shop`, { params: param });
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
export const getGInfo = async ({
  isLogin,
  ishop,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const axiosInstance = isLogin ? authAxios : axios;
    const res = await axiosInstance.get(`${host}/shop/${ishop}`, header);
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

// ! Post Reservation (/gogi/reservation)
export const postReser = async ({ reserData, successFn, failFn, errorFn }) => {
  console.log("레저데이따", reserData);
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
    errorFn(error);
    //
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

export const postReview = async ({ product, successFn, failFn, errorFn }) => {
  console.log("axios", product);

  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await authAxios.post(`${host}/review`, product, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("글 등록 오류", res.statusText);
    }
  } catch (error) {
    // console.log("글 등록 서버오류", error.response.data);
    errorFn(error);
  }
};

const dataApi =
  "https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=UpSO0EUsJ1unPMAMztp9%2BGra9qwB%2FgAGPyetTwD14E4ZcNXP85AhXwOKfmjVQ%2FcyL4XCZiToNl0xrnBi3WJObg%3D%3D";
export const postBusiNum = async ({ dataForm, successFn, errorFn }) => {
  console.log("데이터폼", dataForm);
  const header = {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  };
  try {
    const res = await axios.post(`${dataApi}`, dataForm);
    const returnData = res.data;
    // console.log(resultData);
    successFn(returnData);
  } catch (error) {
    errorFn(error);
  }
};
