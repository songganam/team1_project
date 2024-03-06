import axios from "axios";
import { getCookie, setCookie } from "./CookiesUtil";
import { API_SERVER_HOST } from "../api/meatApi";
const authAxios = axios.create();

const beforeReq = config => {
  console.log("전달", config);
  const roles = ["member", "owner", "admin"];
  for (const role of roles) {
    const memberInfo = getCookie(role);
    if (memberInfo) {
      console.log(`get Token for ${role}:`, memberInfo);
      const { accessToken } = memberInfo;
      console.log("acessToken : ", accessToken);
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
  }
  // const memberInfo = getCookie("member");
  // console.log("get Token : ", memberInfo);
  // if (!memberInfo) {
  //   console.log("not found cookie info");
  //   return Promise.reject({ response: { data: { error: "please login" } } });
  // }
  // console.log("toke info");
  // const { accessToken } = memberInfo;
  // console.log("acessToken : ", accessToken);
  // config.headers.Authorization = `Bearer ${accessToken}`;
  // return config;
  return Promise.reject({ response: { data: { error: "please login" } } });
};

const requestFail = error => {
  console.log("request fail :", error);
  return Promise.reject(error);
};

const rToken = async (accessToken, refreshToken) => {
  const host = API_SERVER_HOST;
  const header = { headers: { Authorization: `Bearer ${accessToken}` } };
  const res = await axios.get(`${host}/api/user/refresh-token`, header);
  console.log("required token");
  console.log("new data :", res.data);
  return res.data;
};

const beforeRes = async res => {
  console.log("Response 전처리 ....", res);
  const data = res.data;
  console.log("1. Response 오기전 서버 전달해준 데이터", data);
  if (data && data.error === "ERROR_ACCESS_TOKEN") {
    console.log("2. 일반적 오류가 아닌 액세스 토큰 에러!! 입니다. ");
    console.log("3. 새로운 토큰을 요청해야 합니다. ");
    console.log("4. 쿠키에 있는 정보를 읽어서, 다시 시도합니다.");
    const memberInfo = getCookie("member");
    console.log("5. 쿠키 토큰 정보 AccessToken ", memberInfo.accessToken);
    console.log("6. 쿠키 토큰 정보 RefreshToken ", memberInfo.refreshToken);
    console.log("7. 위의 정보로 새로운 토큰을 요청합니다.");
    const result = await rToken(
      memberInfo.accessToken,
      memberInfo.refreshToken,
    );
    console.log("8. 요청 이후 되돌아와서 새로운 정보로 쿠키를 업데이트 ");
    (memberInfo.accessToken = result.accessToken),
      (memberInfo.refreshToken = result.refreshToken),
      setCookie("member", JSON.stringify(memberInfo));

    console.log("9. 데이터 요청하던 API 재 요청");
    const originalRequest = res.config;
    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

    return await axios(originalRequest);
  }

  return res;
};
const resFail = error => {
  console.log("res fail : ", error);
  return Promise.reject(error);
};

authAxios.interceptors.request.use(beforeReq, requestFail);
authAxios.interceptors.response.use(beforeRes, resFail);

export default authAxios;
