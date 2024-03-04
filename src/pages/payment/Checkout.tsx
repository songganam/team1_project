import { useEffect, useRef, useState } from "react";
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useLocation } from "react-router-dom";
import { HyperTextOne, PaymentWrap, PriceWrap } from "./paymentStyle";
import { DefaultBt } from "../sign/up/styles/UserSignUpStyles";

const selector = "#payment-widget";
const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export function CheckoutPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Load
  const amount = Number(queryParams.get("amount"));
  const pk = Number(queryParams.get("pk"));

  console.log("amount", amount);
  console.log("pk", pk);
  // console.log(pk)

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const [price, setPrice] = useState(amount);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        selector,
        { value: price, currency: "KRW", country: "KR" },
        { variantKey: "DEFAULT" },
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  return (
    <PaymentWrap>
      <div style={{ padding: "20px" }}>
        <HyperTextOne>
          <h1>예약금 결제</h1>
        </HyperTextOne>
        <PriceWrap>
          <span>{`${price.toLocaleString()}원`}</span>
        </PriceWrap>
      </div>
      {/* 할인 필요없음 */}
      {/* <div>
        <label>
          <input
            type="checkbox"
            onChange={event => {
              setPrice(event.target.checked ? price - 5_000 : price + 5_000);
            }}
          />
          5,000원 할인 쿠폰 적용
        </label>
      </div> */}
      <div id="payment-widget" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DefaultBt
          onClick={async () => {
            const paymentWidget = paymentWidgetRef.current;

            try {
              // ## Q. 결제 요청 후 계속 로딩 중인 화면이 보인다면?
              // 아직 결제 요청 중이에요. 이어서 요청 결과를 확인한 뒤, 결제 승인 API 호출까지 해야 결제가 완료돼요.
              // 코드샌드박스 환경에선 요청 결과 페이지(`successUrl`, `failUrl`)로 이동할 수가 없으니 유의하세요.
              await paymentWidget?.requestPayment({
                orderId: nanoid(),
                orderName: "고기로 예약",
                customerName: "고기로 이용자님",
                // customerEmail: "customer123@gmail.com",
                successUrl: `${window.location.origin}/payment/success?pk=${pk}`,
                failUrl: `${window.location.origin}/payment/fail`,
              });
            } catch (error) {
              // handle error
            }
          }}
        >
          <span>결제하기</span>
        </DefaultBt>
      </div>
    </PaymentWrap>
  );
}
