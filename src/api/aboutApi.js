import axios from "axios";

export const API_SERVER_HOST = "";
const mainHost = `${API_SERVER_HOST}/api/shop`;

export const getAbout = async ({ aboutData, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${mainHost}/main`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("고기 호출 성공");
      successFn(res.data);
    } else {
      failFn("고기 호출 오류");
    }
  } catch (error) {
    errorFn(error);
  }
};
