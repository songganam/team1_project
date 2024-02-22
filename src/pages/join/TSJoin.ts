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
