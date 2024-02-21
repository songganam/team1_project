import Button from "../button/Button";
import { NavStyle } from "./styles/ModifyStyle";

const AdminHeader = ({ title }) => {
  return (
    <NavStyle>
      <div className="page-title">{title}</div>
      <div>
        <Button bttext="저장" />
      </div>
    </NavStyle>
  );
};

export default AdminHeader;
