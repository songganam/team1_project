import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

// ! AXIOS 불러오는거죠?!
export const getAllUserInfo = async ({
  params,
  successFn,
  failFn,
  errorFn,
}) => {
  try {
    // ? response 라는 변수에 담을꺼다 무엇을? axios.get한 값을 어디에있는?
    // ? API address(${API_SERVER_HOST}/api/admin/black)에 있는
    // ? params안에 뭐가있어요? page, 그러면 ${API_SERVER_HOST}/api/admin/black?page=페이지 받은 값이 되겠죠?
    const response = await authAxios.get(`${API_SERVER_HOST}/api/admin/black`, {
      params: params,
    });
    // ? status 라는 변수에 담을꺼다 무엇을 ? response 의 상태(resonpse.status)를 문자열로 변환하겠다!(toString())
    const status = response.status.toString();
    // ? 만약에 status의 첫번째 문자열에 2와 같다면? (200번)
    if (status.charAt(0) === "2") {
      //   console.log("유저 관리 호출 성공");
      // ? 그래 successFn 안에 response의 data를 넣어줄께! (response.data)
      successFn(response.data);
      // ? 아니야? failFn 안에 "문제가 있어!" 를 넣어줄께!
    } else {
      failFn("문제가 있어!");
    }
    // ? 잉? 시도(try)를 했는데 안됐어? error를 잡아챌께(catch)
  } catch (error) {
    // ? 이 에러 데이터는 errorFn에 넣어둘께
    errorFn(error);
    console.log("유저 관리 서버 오류");
  }
};
