import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";
const host = `${API_SERVER_HOST}/api/member`;
// 로그인 하기 위한 정보보내기
// 결과 성공시 RTK 에 업데이트하기
// 일반적으로 post 로 전송합니다.
export const loginPost = async ({ loginParam, successFn, failFn, errorFn }) => {
  try {
    // 만약에 API 서버가 JSON 을 원한다면
    const header = { headers: { "Content-Type": "x-www-urlencoded" } };

    const formData = new FormData();
    // formData.append("이름", "값")
    formData.append("username", loginParam.email);
    formData.append("password", loginParam.pw);

    const res = await axios.post(`${host}/login`, formData, header);

    const status = res.status.toString();

    if (status.charAt(0) === "2") {
      // 화면 처리용
      successFn(res.data);
      // RTK 업데이트 하기위해서는 리턴을 해서 값을 전달해야 해
      return res.data;
    } else {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    errorFn("로그인에 실패하였습니다. 서버가 불안정합니다.다시 시도해주세요.");
  }
};
