import AdminNoShowCard from "../../components/admin/AdminNoShowCard";
import {
  AdminBookPageContent,
  AdminBookPageWrapper,
  AdminNoShowCardBt,
  AdminNoShowInner,
  NavStyle,
} from "./styles/AdminBookpageStyle";

const AdminNoshowPage = () => {
  return (
    <AdminBookPageWrapper>
      <NavStyle>
        <div className="page-title">예약 관리</div>
      </NavStyle>
      <AdminBookPageContent>
        <AdminNoShowInner>
          <p>노쇼 목록</p>
          <AdminNoShowCardBt>
            <AdminNoShowCard></AdminNoShowCard>
          </AdminNoShowCardBt>
        </AdminNoShowInner>
      </AdminBookPageContent>
    </AdminBookPageWrapper>
  );
};

export default AdminNoshowPage;
