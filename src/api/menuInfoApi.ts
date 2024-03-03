import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";

const host = `${API_SERVER_HOST}/api/owner/menu`;

// 메뉴정보 리스트 가져오기
export const getMenu = async ({ ishop }: { ishop: number }) => {
  try {
    const header = { headers: { "Content-type": "application/json" } };
    const response = await authAxios.get(`${host}`, header);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// 메뉴정보 수정하기
export const putMenu = async ({ menuInfo }: { menuInfo: FormData }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await authAxios.put(`${host}`, menuInfo, header);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// 메뉴정보 등록하기
export const postMenu = async ({ menuInfo }: { menuInfo: FormData }) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await authAxios.post(`${host}`, menuInfo, header);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// 메뉴정보 삭제하기
export const deleteMenu = async ({ imenu }: { imenu: number }) => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const response = await authAxios.delete(`${host}?imenu=${imenu}`, header);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
