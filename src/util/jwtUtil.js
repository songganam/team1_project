import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { API_SERVER_HOST } from "../api/meatApi";

const jwtAxios = axios.create();

const beforeReq = config => {
  const memberInfo = getCookie("rt");

  if (!memberInfo) {
    console.log("멤버인포 :", memberInfo);
    return Promise.reject({ response: { data: { error: "Login 하세요." } } });
  }

  const { accessToken } = memberInfo;
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};

const requestFail = err => {
  return Promise.reject(err);
};

const refreshJWT = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST;
  const header = { headers: { Authorization: `Bearer ${accessToken}` } };

  // 임의의 리프레시 토큰 API 주소입니다. 실제 사용할 API 주소로 변경해주시면 됩니다.
  const res = await axios.get(
    `${host}/api/user/refresh?refreshToken=${refreshToken}`,
    header,
  );

  return res.data;
};

const beforeRes = async res => {
  const data = res.data;

  if (data && data.error === "ERROR_ACCESS_TOKEN") {
    const memberInfo = getCookie("rt");
    const result = await refreshJWT(
      memberInfo.accessToken,
      memberInfo.refreshToken,
    );

    // 쿠키에 새로 받은 액세스 토큰과 리프레시 토큰을 저장합니다.
    setCookie("rt", JSON.stringify(result));

    const originalRequest = res.config;
    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

    return await axios(originalRequest);
  }

  return res;
};

const responseFail = err => {
  return Promise.reject(err);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
