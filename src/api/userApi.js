import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";
const host = `${API_SERVER_HOST}/api/admin`;

export const getUser = async ({ successFn, failFn, errorFn }) => {
  try {
    const response = await authAxios.get(`${host}/black`);
    const status = response.status.toString();
    // return response.data;
    if (status.charAt(0) === "2") {
      console.log("신고글 호출 성공");
      successFn(response.data);
    } else {
      failFn("신고글 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버 오류")
  }
};
