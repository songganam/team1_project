import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

const svisorhost = `${API_SERVER_HOST}/api/admin`;

export const getReport = async ({ successFn, failFn, errorFn }) => {
  try {
    const response = await authAxios.get(`${svisorhost}/report?check=0&page=1`);
    const status = response.status.toString();

    if (status.charAt(0) === "2") {
      console.log("신고 관리 호출 성공");
      successFn(response.data);
    } else {
      failFn("신고 관리 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("신고 관리 서버 오류");
  }
};
