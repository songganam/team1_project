import Button from "../button/Button";
import { TSNavStyle } from "./styles/TSModifyStyle";

// props 타입 정의
interface TSAdminHeaderProps {
  title: string;
}

const TSAdminHeader: React.FC<TSAdminHeaderProps> = ({ title }) => {
  return (
    <TSNavStyle>
      <div className="page-title">{title}</div>
      <div>
        <Button bttext="저장" />
      </div>
    </TSNavStyle>
  );
};

export default TSAdminHeader;
