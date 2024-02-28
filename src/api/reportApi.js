import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

// 내용 가져오기
// export const getReport = async (page, row_count, bookmark, fn) => {
//   // axios 를 사용하는 경우에는 언제든 에러가 발생할 수있다.
//   // 반드시 try { 위험한 코드 } catch(error){} 를 사용해야한다.
//   try {
//     const url = `${API_SERVER_HOST}/api/admin/report/{check}`;
//     // console.log(url);
//     const res = await axios.get(url);
//     fn(res.data);
//   } catch (error) {
//     // 개발 중에만 활용
//     // 실제 서비스에서는 경고창으로 마무리 하자.
//     alert(`${error} 가 발생했습니다. 데모데이터 쓸게요`);

//     // 데모 데이터를 이용해서 작업은 진행
//     // const demo = await axios.get("getmeal.json");
//     // fn(demo.data);
//   }
// };

export const getReport = async ({ check }) => {
  try {
    const response = await authAxios.get(
      `${API_SERVER_HOST}/api/admin/report/${check}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
