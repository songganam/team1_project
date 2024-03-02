import { atom } from "recoil";

interface MenuState {
  checkShop: number;
  imenu: number;
  ishop: number;
  price: number;
  menu: string;
  pic: string;
}

// atom 기본값 배열
const defaultMenuState: MenuState[] = [];

export const atomMenuInfoState = atom<MenuState[]>({
  key: "",
  default: defaultMenuState,
});
