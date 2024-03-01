import { ChangeEvent, useState } from "react";
import TSDepositField from "../../components/adminInfo/TSDepositField";
import TSMenuPicInput from "../../components/adminInfo/TSMenuPicInput";
import TSTextField from "../../components/adminInfo/TSTextField";
import { ButtonStyleTS } from "../../components/adminInfo/styles/ButtonStyleTS";
import { TSMenuStyle } from "../../components/adminInfo/styles/TSMenuStyle";
import {
  TSAdminInfoWrapStyle,
  TSBackgroundBoxStyle,
  TSBoxInnerStyle,
  TSNavStyle,
  TSPreviewWrapStyle,
  TSShopStyle,
  TSWrapInnerStyle,
} from "../../components/adminInfo/styles/TSModifyStyle";

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
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>메뉴목록</div>
                {/* <div className="essential">*</div> */}
              </div>
              <TSMenuStyle>
                <div className="menu-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/menuImg.png`}
                  />
                </div>
                <div className="menu-info">
                  <div>갈비살 [500g]</div>
                  <div>38,000원</div>
                </div>
              </TSMenuStyle>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <TSMenuPicInput onChange={handleChangeImage} />
              <div className="title">
                <div>메뉴이름</div>
                <div className="essential">*</div>
              </div>
              {/* <TSTextField placeholder="메뉴 이름을 입력하세요" /> */}
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
              <TSDepositField placeholder="메뉴 가격을 입력하세요" />
              <div className="text-guide">숫자만 사용가능, 단위: 원</div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
        </TSShopStyle>
        <TSPreviewWrapStyle>
          <TSBackgroundBoxStyle>
            <TSBoxInnerStyle>
              <div className="title">
                <div>미리보기</div>
                {/* <div className="essential">*</div> */}
              </div>
              <div className="text-guide">
                고깃집 상세보기 보여지는 예시입니다.
              </div>
            </TSBoxInnerStyle>
          </TSBackgroundBoxStyle>
        </TSPreviewWrapStyle>
      </TSWrapInnerStyle>
    </TSAdminInfoWrapStyle>
  );
};

export default TSAdminMenuPage;
