import axios from "axios";

export const API_SERVER_HOST = "http://192.168.0.66:8080";
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async tno => {
  try {
    const res = await axios.get(`${prefix}/${tno}`);
    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      return res.data;
    } else {
      return "잘못된 정보를 전달함";
    }
  } catch (error) {
    console.log(error);
  }
};

// 목록당 페이지와 일정 개수를 가져오기
export const getList = async param => {
  try {
    // "http://192.168.0.66:8080/api/todo/list?page=3&size=10"
    // const res = await axios.get(`${prefix}/list?page=${page}&size=${size}`);

    const res = await axios.get(`${prefix}/list`, {
      params: { ...param },
    });

    console.log(res.data);
    // HTTP 상태 코드 파악하여 별도로 처리하기
    const status = res.status.toString();

    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      // console.log("성공");
      return res.data;
    } else {
      console.log("에러");
      return status.error;
    }
  } catch (error) {
    // HTTP 500 류의 오류 (서버에러)
    console.log(error);
  }
};

// 할일 등록하기 (객체{}로 전달)
export const postAdd = async ({ todo, successFn, failFn, errFn }) => {
  try {
    const res = await axios.post(`${prefix}/`, { ...todo });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("데이터 에러");
    }
  } catch (error) {
    errFn(error);
  }
};

// 수정하기
export const putOne = async ({ todo, successFn, failFn, errFn }) => {
  try {
    const { tno } = todo;
    const res = await axios.put(`${prefix}/${tno}`, { ...todo });
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("데이터 에러");
    }
  } catch (error) {
    errFn(error);
  }
};
// 삭제하기
export const deleteOne = async ({ tno, successFn, failFn, errFn }) => {
  try {
    const res = await axios.delete(`${prefix}/${tno}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("데이터 에러");
    }
  } catch (error) {
    errFn(error);
  }
};
