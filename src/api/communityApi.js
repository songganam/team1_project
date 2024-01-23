import axios from "axios";
import { API_SERVER_HOST } from "./config";
import jwtAxios from "../util/jwtUtil";

const host = `${API_SERVER_HOST}/api/community`;

// 커뮤니티 전체 목록 가져오기(커뮤니티 리스트)
export const getList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const response = await axios.get(`${host}`, { params: param });
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      // console.log("커뮤니티 목록 호출 성공");
      successFn(response.data);
    } else {
      failFn("커뮤니티 목록 호출 오류");
    }
  } catch (error) {
    errorFn("커뮤니티 목록 서버오류");
  }
};

// 글 수정하기(커뮤니티 수정)
export const putOne = async ({ iboard, dto, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.put(`${host}`, iboard, dto, header);
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      successFn(response.data);
    } else {
      failFn("글 수정 오류");
    }
  } catch (error) {
    errorFn("글 수정 서버오류");
  }
};

// 글, 사진 등록(비동기 통신)(커뮤니티 등록)
export const postAdd = async ({ dto, successFn, failFn, errorFn }) => {
  try {
    console.log(dto);
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.post(`${host}`, dto, header);
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      successFn(response.data);
    } else {
      failFn("글 등록 오류");
    }
  } catch (error) {
    errorFn("글 등록 서버오류");
  }
};

// 해당 글 삭제(커뮤니티 삭제)
export const deleteOne = async ({ iboard, successFn, failFn, errorFn }) => {
  try {
    const response = await axios.delete(`${host}`, iboard);
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      successFn(response.data);
    } else {
      failFn("글 삭제 오류");
    }
  } catch (error) {
    errorFn("글 삭제 서버오류");
  }
};

// 해당 글 댓글 작성(커뮤니티 댓글 작성)
export const postComment = async ({ iboard, successFn, failFn, errorFn }) => {
  try {
    console.log(iboard);
    const response = await axios.post(`${host}/comment`, iboard);
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      successFn(response.data);
    } else {
      failFn("댓글 등록 오류");
    }
  } catch (error) {
    errorFn("댓글 등록 서버오류");
  }
};

// 해당 글 댓글 삭제(커뮤니티 댓글 삭제)
export const deleteComment = async ({ iboard, successFn, failFn, errorFn }) => {
  try {
    const response = await axios.delete(`${host}/comment`, iboard);
    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      successFn(response.data);
    } else {
      failFn("글 삭제 오류");
    }
  } catch (error) {
    errorFn("글 삭제 서버오류");
  }
};

// 해당 글 상세보기
export const getOne = async ({ iboard, successFn, failFn, errorFn }) => {
  try {
    const response = await axios.get(`${host}/${iboard}`);

    const status = response.status.toString();
    if (status.charAt(0) === "2") {
      successFn(response.data);
    } else {
      failFn("상세보기 호출 오류");
    }
  } catch (error) {
    errorFn("상세보기 호출 서버오류");
  }
};
