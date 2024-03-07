import { useRecoilState } from "recoil";
import { atomAdminState } from "../../atom/atomAdminState";
import AdminButcherBookCard from "../../components/admin/AdminButcherBookCard";
import AdminMeatBookCard from "../../components/admin/AdminMeatBookCard";
import {
  AdminBookCardBt,
  AdminBookInner,
  AdminBookPageContent,
  AdminBookPageWrapper,
  NavStyle,
} from "./styles/AdminBookpageStyle";

const AdminBookPage = () => {
  const [adminState, setAdminState] = useRecoilState(atomAdminState);

  return (
    <AdminBookPageWrapper>
      <NavStyle>
        <div className="page-title">예약 관리</div>
      </NavStyle>
      <AdminBookPageContent>
        <AdminBookInner>
          <p>신규 예약 목록</p>
          <AdminBookCardBt>
            {adminState.checkShop === 0 ? (
              <AdminMeatBookCard />
            ) : (
              <AdminButcherBookCard />
            )}
          </AdminBookCardBt>
        </AdminBookInner>
      </AdminBookPageContent>
    </AdminBookPageWrapper>
  );
};

export default AdminBookPage;
