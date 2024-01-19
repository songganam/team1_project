import { Cookies } from "react-cookie";

const cookie = new Cookies();

// 로그인 시 정보 저장 및 유효기간 설정
export const setCookie = (name, value, day = 1) => {
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + day);
  return cookie.set(name, value, { path: "/", expires: expires });
};

// 로그인 된 정보 get
export const getCookie = name => {
  return cookie.get(name);
};

// 로그아웃 시 정보 remove
export const removeCookie = (name, path = "/") => {
  cookie.remove(name, { path });
};
