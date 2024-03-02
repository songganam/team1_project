import TSDepositField from "../../components/adminInfo/TSDepositField";
import TSMenuPicInput from "../../components/adminInfo/TSMenuPicInput";
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

const TSAdminMenuPage = () => {
  return (
    <TSAdminInfoWrapStyle>
      <TSNavStyle>
        <div className="page-title">메뉴 관리</div>
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
              {/* <TSMenuPicInput onChange={} /> */}
              <div className="title">
                <div>메뉴이름</div>
                <div className="essential">*</div>
              </div>
              {/* <TSTextField placeholder="메뉴 이름을 입력하세요" /> */}
              <div className="name-guide">
                <div className="text-guide">
                  숫자, 한글, 영문, 특수문자 사용가능
                </div>
                <div className="text-length">0/30</div>
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
