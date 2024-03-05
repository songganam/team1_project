import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SuccessWrap } from "./paymentStyle";
import { DefaultBt } from "../sign/up/styles/UserSignUpStyles";

export function SuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.

    // checkShop
    // ireser
    // amount
    const requestData = {
      // orderId: searchParams.get("orderId"),
      checkShop: 0,
      amount: searchParams.get("amount"),
      ireser: searchParams.get("pk"),
      // paymentKey: searchParams.get("paymentKey"),
    };

    async function confirm() {
      const response = await fetch("/api/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // 결제 실패 비즈니스 로직을 구현하세요.
        navigate(`/fail?message=${json.message}&code=${json.code}`);
        return;
      }

      // 결제 성공 비즈니스 로직을 구현하세요.
    }
    confirm();
  }, []);
  // const navigate = useNavigate();
  const handleClickBack = () => {
    navigate("/my/book");
  };

  return (
    <SuccessWrap className="result wrapper">
      <div className="box_section">
        <h2>결제 성공</h2>
        {/* <p>{`주문번호: ${searchParams.get("orderId")}`}</p> */}
        <p>{`결제 금액: ${Number(
          searchParams.get("amount"),
        ).toLocaleString()}원`}</p>
        {/* <p>{`예약번호: ${searchParams.get("pk")}`}</p> */}
        <span>고기로 예약을 이용해주셔서 감사합니다.</span>
        <span>더 좋은 서비스로 보답하겠습니다.</span>
        <div style={{ padding: "30px" }}>
          <DefaultBt onClick={handleClickBack}>
            <span>되돌아가기</span>
          </DefaultBt>
        </div>
      </div>
    </SuccessWrap>
  );
}

// import { useSearchParams } from "react-router-dom";

// export function SuccessPage() {
//   const [searchParams] = useSearchParams();

//   async function confirm() {
//     const response = await fetch("/api/confirm"),{
//       method:"POST",

//     };
//   }

//   return (
//
//   );
// }
