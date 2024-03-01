import { atom } from "recoil";

interface StoreState {
  pics: string[];
  imeat: number;
  name: string;
  location: string;
  ishopPics: number[];
  open: string;
  tel: string;
  x: string;
  y: string;
  deposit: number;
  facilities: number[];
  checkShop: number;
  ishop: number;
}

const initState: StoreState = {
  pics: [],
  imeat: 1,
  name: "",
  location: "",
  ishopPics: [],
  open: "",
  tel: "",
  x: "",
  y: "",
  deposit: 0,
  facilities: [],
  checkShop: 0,
  ishop: 0,
};

export const atomStoreInfoState = atom({
  key: "atomStoreInfoState",
  default: initState,
});
