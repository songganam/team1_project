import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/config";

// 인증이 필요한 경우에 활용하는 interceptor 전용 axios
const jwtAxios = axios.create();

// request
const beforeRequest = config => {
  // 요청 전 전달
  console.log(config);
  // 쿠키로 토큰 가져오기
  const memberInfo = getCookie("member");
  if (!memberInfo) {
    return Promise.reject({ response: { data: { error: "로그인 하세요" } } });
  }

  // 쿠키에서 토큰 정보를 객체구조분해할당
  const { accessToken } = memberInfo;
  // accessToken 정보
  console.log(accessToken);
  config.headers.Authorization = `Bearer${accessToken}`;

  return config;
};

// request fail
const requestFail = err => {
  console.log(err);
  return Promise.reject(err);
};

// Refresh Token
// 엑세스 요청 실패 시 무조건 시도 함
const refreshJWT = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST;
  const header = { headers: { Authorization: `Beare${accessToken}` } };
  // API에 Refresh해 줄 주소(URI)요청
  const res = await axios.get(
    // ! 여기는 path 및 querystring 바뀔수 도 있음
    `${host}/api/member/refresh?refreshToken=${refreshToken}`,
    header,
  );
  // refreshToken 요청 및 accessToken과 refreshToken 반환
  return res.data;
};

// response
const beforeResponse = async res => {
  // 응답 전 전달
  console.log(res);
  const data = res.data;
  console.log(data);

  if (data && data.error === "ERROR_ACCeSS_TOKEN") {
    // 토큰 에러, 쿠키 정보를 읽어서 새로운 토큰 요청
    const memberInfo = getCookie("member");
    console.log(memberInfo.accessToken);
    console.log(memberInfo.refreshToken);
    const result = await refreshJWT(
      memberInfo.accessToken,
      memberInfo.refreshToken,
    );
    // 새로운 정보로 쿠키 업데이트
    (memberInfo.accessToken = result.accessToken),
      (memberInfo.refreshToken = result.refreshToken),
      setCookie("member", JSON.stringify(memberInfo));

    // API 재요청
    const originalRequest = res.config;
    originalRequest.headers.Authorization = `Beare${result.accessToken}`;

    return await axios(originalRequest);
  }

  return res;
};

// respons fail
const responseFail = err => {
  console.log(err);
  return Promise.reject(err);
};

// axios interceptor 적용
jwtAxios.interceptors.request.use(beforeRequest, requestFail);
jwtAxios.interceptors.response.use(beforeResponse, responseFail);

export default jwtAxios;
