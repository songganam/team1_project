import { atom } from "recoil";

interface MenuState {
  checkShop: number;
  imenu: number;
  ishop: number;
  ibutcher?: number;
  price: number;
  menu: string;
  pic: string;
}

// atom 기본값 배열
export const defaultMenuState = {
  checkShop: 0,
  imenu: 0,
  ishop: 0,
  ibutcher: 0,
  price: 0,
  menu: "",
  pic: "",
};

export const atomMenuInfoState = atom<MenuState>({
  key: "atomMenuInfoState",
  default: defaultMenuState,
});

export const menuRefreshState = atom({
  key: "menuRefreshState",
  default: 1,
});
