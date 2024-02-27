// 계정 관리 API
// 계정 관리 API
import axios from "axios";
import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/admin`;

// 서버에 들어가는 주소로 들어가면

// ${API_SERVER_HOST} = localhost:3000

export const getReport = async () => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const res = await authAxios.get(`${host}`, header);
    console.log("데이터 가져옴");
    return res.data;
  } catch (error) {
    console.log("에러남", error);
  }
};
