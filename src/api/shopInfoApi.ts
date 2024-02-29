import axios from "axios";
import authAxios from "../util/tokenUtil";
import { API_SERVER_HOST } from "./config";
import { string } from "prop-types";

const host = `${API_SERVER_HOST}/api`;

interface ShopInfo {
  pics: string[];
  dto: {
    imeat: number;
    name: string;
    location: string;
    ishopPics: string[];
    open: string;
    tel: string;
    x: string;
    y: string;
    deposit: number;
    facilities: string[];
  };
}

interface MenuInfo {
  checkShop: number;
  imenu: number;
  ishop: number;
  price: number;
  menu: string;
  pic: string;
}

interface MenuModify {
  pic?: string;
  imenu: number;
  menu?: string;
  price?: number;
}

// 매장정보 가져오기
export const getShopInfo = async ({ ishop }: { ishop: number | any }) => {
  try {
    const header = { headers: { "Content-type": "application/json" } };
    const response = await authAxios.get(`${host}/owner/management`, header);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// 매장정보 수정하기
export const putShopInfo = async ({
  shopInfoData,
}: {
  shopInfoData: FormData;
}) =>
  // isAdminLogin: boolean,
  {
    try {
      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // const axiosInstance = isAdminLogin ? authAxios : axios;
      const response = await authAxios.put(
        `${host}/owner/modify`,
        shopInfoData,
        header,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  };

// // 가게이미지 삭제하기
// export const deleteShopImage = async (ishopPics: number[], picsPk: number) => {
//   try {
//     const header = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     // 삭제하고자 하는 이미지의 picsPk를 제외한 나머지를 서버에 전송
//     const updatedIshopPics = ishopPics.filter(pk => pk !== picsPk);
//     const response = await authAxios.put(
//       `${host}/owner/modify`,
//       { ishopPics: updatedIshopPics },
//       header,
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return undefined;
//   }
// };

// 메뉴 리스트
export const getMenus = async (
  param: MenuInfo[],
  isAdminLogin: boolean,
): Promise<MenuInfo[] | undefined> => {
  try {
    // params와 headers를 같은 객체 내에 정의합니다.
    const header = {
      headers: { "Content-Type": "application/json" },
      params: param, // 쿼리 파라미터로 전달할 객체
    };
    const axiosInstance = isAdminLogin ? authAxios : axios;
    const response = await axiosInstance.get(`${host}/owner/menu`, header);
    return response.data;
  } catch (error) {
    console.log("메뉴정보 호출 오류");
    throw error;
  }
};

// 메뉴 등록
export const postMenu = async (
  { menuInfo }: { menuInfo: FormData },
  isAdminLogin: boolean,
) => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const axiosInstance = isAdminLogin ? authAxios : axios;
    const response = await axiosInstance.post(
      `${host}/api/owner/menu`,
      menuInfo,
      header,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 메뉴 수정
export const putMenu = async (
  menuInfo: MenuModify,
  isAdminLogin: boolean,
): Promise<MenuInfo | undefined> => {
  try {
    const header = { headers: { "Content-Type": "multipart/form-data" } };
    const axiosInstance = isAdminLogin ? authAxios : axios;
    const response = await axiosInstance.put(
      `${host}/api/owner/menu`,
      menuInfo,
      header,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

// 메뉴 삭제
export const deleteMenu = async (
  imenu: MenuModify,
  isAdminLogin: boolean,
): Promise<MenuInfo | undefined> => {
  try {
    const header = { headers: { "Content-Type": "application/json" } };
    const axiosInstance = isAdminLogin ? authAxios : axios;
    const response = await axiosInstance.delete(
      `${host}/owner/menu/${imenu}`,
      header,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
