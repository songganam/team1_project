type MeatType = {
  [key: number]: string;
};

type FacilityType = {
  [key: number]: string;
};

export class MeatTypes {
  private types: MeatType;
  constructor() {
    this.types = {
      1: "돼지",
      2: "소",
      3: "닭",
      4: "오리",
      5: "양",
      0: "정육점",
    };
  }
  getLabel(id: number): string {
    return this.types[id] || "알 수 없음";
  }
}

export class FacilitiesTypes {
  private types: FacilityType;
  constructor() {
    this.types = {
      1: "주차장",
      2: "단체가능",
      3: "포장가능",
      4: "배달가능",
      5: "Wi-fi",
      6: "예약가능",
      7: "화장실구분",
      8: "대기공간",
      9: "장애인시설",
      10: "반려동물",
      11: "유아의자",
      12: "간편결제",
    };
  }
  getLabel(ids: number[]): string {
    return ids.map(id => this.types[id] || "알 수 없음").join(", ");
  }
}
