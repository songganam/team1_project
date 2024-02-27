import { ChangeEvent, useState } from "react";
import TSMenuPicInput from "../../components/adminInfo/TSMenuPicInput";
import { ButtonStyleTS } from "../../components/adminInfo/styles/ButtonStyleTS";
import {
  TSAdminInfoWrapStyle,
  TSBackgroundBoxStyle,
  TSBoxInnerStyle,
  TSNavStyle,
  TSShopStyle,
  TSWrapInnerStyle,
} from "../../components/adminInfo/styles/TSModifyStyle";
import TSTextField from "../../components/adminInfo/TSTextField";
import TSDepositField from "../../components/adminInfo/TSDepositField";

// 메뉴정보 초기값
const initState: MenuInfo = {
  checkShop: 0,
  imenu: 0,
  ishop: 0,
  price: 0,
  menu: "",
  pic: null,
};

// 메뉴정보 타입 정의
interface MenuInfo {
  checkShop: number;
  imenu: number;
  ishop: number;
  price: number;
  menu: string;
  pic: File | null;
}

const TSAdminMenuPage = () => {
  // 메뉴정보 상태관리
  const [menuInfo, setMenuInfo] = useState<MenuInfo>(initState);

  // 이미지 업로드 관련
  // 자식 컴포넌트로부터 전달받은 이미지 파일 처리
  const handleChangeImage = (file: File | null) => {
    // menuInfo pic 상태 업데이트
    setMenuInfo(prev => ({ ...prev, pic: file }));
  };

  // 텍스트필드 관련
  const [text, setText] = useState("");
  // 텍스트필드 값 변경 이벤트 핸들러
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setMenuInfo({ ...menuInfo, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  //! 여기는 콘솔 확인용================================
  console.log(menuInfo);
  //!==================================================

  return (
    <TSAdminInfoWrapStyle>
      <TSNavStyle>
        <div className="page-title">메뉴 관리</div>
        {/* 나중에 type="submit"으로 변경해야함 */}
        <ButtonStyleTS type="button">저장</ButtonStyleTS>
      </TSNavStyle>
      <TSWrapInnerStyle>
        <TSShopStyle>
          <TSBackgroundBoxStyle></TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <TSMenuPicInput onChange={handleChangeImage} />
              <div className="title">
                <div>메뉴이름</div>
                <div className="essential">*</div>
              </div>
              <TSTextField
                placeholder="메뉴 이름을 입력하세요"
                name="menu"
                value={menuInfo.menu}
                onChange={handleChangeText}
              />
              <div className="name-guide">
                <div className="text-guide">
                  숫자, 한글, 영문, 특수문자 사용가능
                </div>
                <div className="text-length">{text.length}/30</div>
              </div>
              <div className="title">
                <div>메뉴가격</div>
                <div className="essential">*</div>
              </div>
              <TSDepositField
                placeholder="메뉴 가격을 입력하세요"
                name="price"
                value={menuInfo.price}
                onChange={handleChangeText}
              />
              <div className="text-guide">숫자만 사용가능, 단위: 원</div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
        </TSShopStyle>
      </TSWrapInnerStyle>
    </TSAdminInfoWrapStyle>
  );
};

export default TSAdminMenuPage;
