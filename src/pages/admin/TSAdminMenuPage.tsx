import MenuList from "../../components/adminInfo/MenuList";
import MenuModify from "../../components/adminInfo/MenuModify";
import { ButtonStyleTS } from "../../components/adminInfo/styles/ButtonStyleTS";
import {
  TSAdminInfoWrapStyle,
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
        {/* <ButtonStyleTS type="button">저장</ButtonStyleTS> */}
      </TSNavStyle>
      <TSWrapInnerStyle>
        <TSShopStyle>
          <MenuList />
          {/* <MenuPost /> */}
        </TSShopStyle>
        <TSPreviewWrapStyle>
          <MenuModify />
        </TSPreviewWrapStyle>
      </TSWrapInnerStyle>
    </TSAdminInfoWrapStyle>
  );
};

export default TSAdminMenuPage;
