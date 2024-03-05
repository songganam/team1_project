import Button from "../../components/button/Button";
import SupervisorNewShopCard from "../../components/supervisor/SupervisorNewShopCard";
import SupervisorShopCard from "../../components/supervisor/SupervisorShopCard";
import {
  NavStyle,
  SupervisorNewShopBt,
  SupervisorNewShopInner,
  SupervisorShopBt,
  SupervisorShopInner,
  SupervisorShopPageContent,
  SupervisorShopPageWrapper,
} from "./styles/SupervisorShopPageStyle";

const SupervisorShopPage = () => {
  return (
    <SupervisorShopPageWrapper>
      <NavStyle>
        <div className="page-title">매장 관리</div>
        <div>
          <Button bttext="저장" />
        </div>
      </NavStyle>
      <SupervisorShopPageContent>
        <SupervisorNewShopInner>
          <p>신규 입점 매장 목록</p>
          <SupervisorNewShopBt>
            <SupervisorNewShopCard></SupervisorNewShopCard>
            <Button bttext="더보기"></Button>
          </SupervisorNewShopBt>
        </SupervisorNewShopInner>
        <SupervisorShopInner>
          <SupervisorShopBt>
            <SupervisorShopCard></SupervisorShopCard>
            <Button bttext="더보기"></Button>
          </SupervisorShopBt>
        </SupervisorShopInner>
      </SupervisorShopPageContent>
    </SupervisorShopPageWrapper>
  );
};

export default SupervisorShopPage;
