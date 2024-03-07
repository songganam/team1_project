import SupervisorNewShopCard from "../../components/supervisor/SupervisorNewShopCard";
import {
  NavStyle,
  SupervisorNewShopBt,
  SupervisorNewShopInner,
  SupervisorShopPageContent,
  SupervisorShopPageWrapper,
} from "./styles/SupervisorShopPageStyle";

const SupervisorShopPage = () => {
  return (
    <SupervisorShopPageWrapper>
      <NavStyle>
        <div className="page-title">매장 관리</div>
      </NavStyle>
      <SupervisorShopPageContent>
        <SupervisorNewShopInner>
          <SupervisorNewShopBt>
            <SupervisorNewShopCard></SupervisorNewShopCard>
          </SupervisorNewShopBt>
        </SupervisorNewShopInner>
      </SupervisorShopPageContent>
    </SupervisorShopPageWrapper>
  );
};

export default SupervisorShopPage;
