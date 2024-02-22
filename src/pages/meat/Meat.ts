export interface Glist {
  ishop: number;
  name: string;
  location: string;
  open: string;
  tel: string;
  x: string;
  y: string;
  star: number;
  isBook: number;
  facilities: string[];
  pics: string[];
  menus: {
    price: number;
    menu: string;
    pic: string;
  }[];
  reviews: {
    iuser: number;
    writerPic: string;
    ireview: number;
    nickname: string;
    star: number;
    review: string;
    pic: string[];
  }[];
}

export interface List {
  ishop: number;
  name: string;
  location: string;
  count: number;
  pics: string[];
  facilities: string[];
}
export interface PropsList {
  serverData: any;
}

export interface ListParam {
  page: number;
  search: string;
  category: number;
  filter: number;
}

export type ListQuery = {
  page: number;
  search: string;
  category: number;
  filter: number;
};

export interface ReviewForm {
  pics: string[];
  dto: {
    checkShop: number;
    ireser: number;
    ishop: number;
    star: number;
    review: string;
  };
}

export interface ReserForm {
  ishop: number;
  date: string;
  headCount: number;
  request: string;
}
export interface ReserTimeBtnProps {
  clicked: boolean;
  // onClick: () => void;
}
export interface StyledComponentProps {
  selected: boolean;
}
