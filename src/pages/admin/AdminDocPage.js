import Button from "../../components/button/Button";
import {
  SupervisorReportHeader,
  SupervisorReportWrapper,
} from "../supervisor/styles/SupervisorReportStyle";
import {
  AdminDocBoard,
  AdminDocBox,
  AdminDocMain,
  BoxChart,
  BoxContent,
  BoxTop,
  DocMainTop,
} from "./styles/AdminDocStyle";

const AdminDocPage = () => {
  return (
    <SupervisorReportWrapper>
      <SupervisorReportHeader>
        <div className="page-title">매장 분석</div>
        <div>
          <Button bttext="저장" />
        </div>
      </SupervisorReportHeader>
      <AdminDocMain>
        <DocMainTop>
          <div className="title">
            <span>Month</span>
          </div>
        </DocMainTop>
        <AdminDocBoard>
          <AdminDocBox>
            <BoxTop>
              <span>북마크</span>
            </BoxTop>
            <BoxContent>
              <span>123</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>예약</span>
            </BoxTop>
            <BoxContent>
              <span>34</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>리뷰</span>
            </BoxTop>
            <BoxContent>
              <span>34</span>
            </BoxContent>
          </AdminDocBox>
          <AdminDocBox>
            <BoxTop>
              <span>별점</span>
            </BoxTop>
            <BoxContent>
              <span>34</span>
            </BoxContent>
          </AdminDocBox>
        </AdminDocBoard>
        <BoxChart>
          <span>차트</span>
        </BoxChart>
      </AdminDocMain>
    </SupervisorReportWrapper>
  );
};

export default AdminDocPage;
