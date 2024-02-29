import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";
const svisorhost = `${API_SERVER_HOST}/api/admin`;

export const getUser = async ({ successFn, failFn, errorFn }) => {
  try {
    const response = await authAxios.get(`${svisorhost}/black?page=1`);
    const status = response.status.toString();
    // return response.data;
    if (status.charAt(0) === "2") {
      console.log("유저 관리 호출 성공");
      successFn(response.data);
    } else {
      failFn("유저 관리 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("유저 관리 서버 오류");
  }
};
