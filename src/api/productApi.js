import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

// 제품 API
const host = `${API_SERVER_HOST}/api/products`;

// 파일 업로드 비동기 통신
export const postAdd = async ({ product, successFn, failFn, errorFn }) => {
  try {
    // 파일 업로드시 준비할 것이 있습니다.
    // 반드시 복수형으로 { headers } 작성 필요
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await axios.post(`${host}/`, product, header);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("전송 오류입니다.");
    }
  } catch (error) {
    errorFn("서버에러에요");
  }
};

// 제품 목록가져오기
export const getList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${host}/list`, { params: param });

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("목록 호출 오류입니다.");
    }
  } catch (error) {
    errorFn("목록 호출 서버 에러에요");
  }
};

// 하나의 제품 정보 가져오기
export const getOne = async ({ pno, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${host}/${pno}`);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("상세정보 호출 오류입니다.");
    }
  } catch (error) {
    errorFn("상세정보 호출 서버 에러에요");
  }
};

// 제품 수정하기
export const putOne = async ({ pno, product, successFn, failFn, errorFn }) => {
  try {
    // 여기서도 이미지가 추가될 수 있어요.
    // header 가 필요합니다.
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const res = await axios.put(`${host}/${pno}`, product, header);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("상세정보 호출 오류입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};

// 상품 삭제
export const deleteOne = async ({ pno, successFn, failFn, errorFn }) => {
  try {
    // 여기서도 이미지가 추가될 수 있어요.
    // header 가 필요합니다.
    const res = await axios.delete(`${host}/${pno}`);

    const status = res.status.toString();
    if (status.charAt(0) === "2") {
      successFn(res.data);
    } else {
      failFn("제품삭제 호출 오류입니다.");
    }
  } catch (error) {
    errorFn(error);
  }
};
