import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api`;

// 0이 아니면 로그인 0이면 로그아웃 상태 true = 로그아웃 상태 / false = 로그인 상태

//! GET Meat List Page
export const getGList = async ({ params, successFn, failFn, errorFn }) => {
  console.log("파라미터", params);
  try {
    const res = await axios.get(`${host}/shop`, { params: params });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("목록 호출 성공");
      // successFn(res.data);
      return res.data;
    } else {
      failFn("목록 호출 오류");
    }
  } catch (error) {
    errorFn(error);
  }
};
// Auth test
// @COMMENT react-QUERY
export const getGInfo = async ({ isLogin, ishop }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const axiosInstance = isLogin ? authAxios : axios;
    const res = await axiosInstance.get(`${host}/shop/${ishop}`, header);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("목록 호출 성공");
      // successFn(res.data);
      return res.data;
    } else {
      console.log("목록 호출 오류");
    }
  } catch (error) {
    console.log(error);
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

export const postReview = async ({ reviewData, successFn, failFn, errorFn }) => {
  console.log("axios", reviewData);

  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await authAxios.post(`${host}/review`, reviewData, header);
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

export const getCoord = async ({ fullAddress, successCoordFn }) => {
  console.log("넘겨짐", fullAddress);
  try {
    const res = await axios.get(
      "https://dapi.kakao.com/v2/local/search/address.json",
      {
        params: { query: fullAddress },
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
        }, // 카카오 REST API 키를 입력해주세요.
      },
    );
    const locationData = res.data.documents[0];
    console.log(`위도: ${locationData.y}, 경도: ${locationData.x}`);
    successCoordFn(locationData);
  } catch (error) {
    console.log(error);
  }
};
