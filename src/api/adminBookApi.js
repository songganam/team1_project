import authAxios from "../util/tokenUtil";

export const API_SERVER_HOST = "";
const host = `${API_SERVER_HOST}/api/admin`;

// 관리자 페이지 : 고깃집 예약 관리 내역 가져오기 (GET)
export const getAdminMeatBook = async ({ successFn, failFn, errorFn }) => {
  try {
    const res = await authAxios.get(`${host}/book`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      console.log("예약 내역 호출 성공");
      successFn(res.data);
    } else {
      failFn("예약 내역 호출 오류");
    }
  } catch (error) {
    errorFn(error);
    console.log("서버 오류");
  }
};

// 관리자 페이지 : 정육점 예약 관리 내역 가져오기 (GET)

// 관리자 페이지 : 노쇼 내역 가져오기 (GET)
