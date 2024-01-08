import axios from "axios";

export const API_SERVER_HOST = "http://192.168.0.66.8080";
const prefix = `${API_SERVER_HOST}/api/community`;

// 목록 당 페이지와 일정 개수를 가져오기
export const getList = async (page, size) => {
  try {
    // "http://"
    const res = await axios.get(`${prefix}/list?page=${page}&size=${size}`);
    console.log(res.data);
    // HTTP 상태 코드 파악하여 별도로 처리하기
    const status = res.status.toString();
    // 문자열 예) "200" 또는 "404"의 0번째 위치의 글자를 알아낸다.
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      console.log("성공");
      return res.data;
    } else {
      console.log("실패");
      return status.error;
    }
  } catch (error) {
    // HTTP 500류의 오류(서버에러)
    console.log(error);
  }
};
