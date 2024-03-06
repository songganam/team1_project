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
      </NavStyle>
      <SupervisorShopPageContent>
        <SupervisorNewShopInner>
          <SupervisorNewShopBt>
            <SupervisorNewShopCard></SupervisorNewShopCard>
          </SupervisorNewShopBt>
        </SupervisorNewShopInner>
        <SupervisorShopInner>
          <SupervisorShopBt>
            <SupervisorShopCard></SupervisorShopCard>
          </SupervisorShopBt>
        </SupervisorShopInner>
      </SupervisorShopPageContent>
    </SupervisorShopPageWrapper>
  );
};

export default SupervisorShopPage;
