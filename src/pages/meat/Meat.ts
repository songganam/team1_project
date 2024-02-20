interface Glist {
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
}
