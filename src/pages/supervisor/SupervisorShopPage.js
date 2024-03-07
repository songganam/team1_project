import SupervisorNewShopCard from "../../components/supervisor/SupervisorNewShopCard";
import { SupervisorHeader } from "./styles/SupervisorReportStyle";
import {
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
      <SupervisorHeader>
        <div className="page-title">매장 관리</div>
      </SupervisorHeader>
      <SupervisorShopPageContent>
        <SupervisorNewShopInner>
          <SupervisorNewShopBt>
            <SupervisorNewShopCard></SupervisorNewShopCard>
          </SupervisorNewShopBt>
        </SupervisorNewShopInner>
        <SupervisorShopInner>
          <SupervisorShopBt>
            {/* <SupervisorShopCard></SupervisorShopCard> */}
          </SupervisorShopBt>
        </SupervisorShopInner>
      </SupervisorShopPageContent>
    </SupervisorShopPageWrapper>
  );
};

export default SupervisorShopPage;
