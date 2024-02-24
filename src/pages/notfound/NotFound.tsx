import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Layout from "../../layouts/Layout";
import {
  NotFoundText,
  NotFoundTextWrap,
  NotFoundWrap,
} from "./styles/NotFoundStyle";
const NotFound = () => {
  const navigate = useNavigate();
  const handleReturnClick = () => {
    // console.log("입력됨");
    navigate(-1);
  };
  return (
    <Layout>
      <NotFoundWrap>
        <img src={process.env.PUBLIC_URL + `/assets/images/logo_2_1.svg`} />
        <NotFoundTextWrap>
          <NotFoundText>
            <span>여기에는 고기냄새가 나지 않습니다.</span>
          </NotFoundText>
          <NotFoundText>
            <span>되돌아가주세요</span>
          </NotFoundText>
        </NotFoundTextWrap>
        <div onClick={handleReturnClick}>
          <Button bttext={"되돌아가기"} />
        </div>
      </NotFoundWrap>
    </Layout>
  );
};

export default NotFound;
