export interface AdminJoinData {
  pic: string[];
  dto: {
    id: string;
    upw: string;
    checkUpw: string;
    num: string;
    name: string;
    shopName: string;
    x: string;
    y: string;
    location: string;
    imeat: number | null;
  };
}
export interface UserJoinData {
  pic: string;
  email: string;
  upw: string;
  checkUpw: string;
  name: string;
  nickname: string;
  birth: string;
  gender: string;
  address: string;
  tel: string;
}
export interface NicknameForm {
  nickname: string;
}

export interface SigninForm {
  email?: string;
  id?: string;
  upw: string;
}
