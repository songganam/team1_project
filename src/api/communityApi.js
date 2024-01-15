import axios from "axios";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/community`;

// 게시판 전체 목록 가져오기
export const getList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${host}`, { params: param });
    const status = res.status.toStrings();
    if (status.charAt(0) === "2") {
      console.log("완료");
      successFn(res.data);
    } else {
      failFn("목록 호출 오류");
    }
  } catch (error) {
    errorFn(error);
  }
};
