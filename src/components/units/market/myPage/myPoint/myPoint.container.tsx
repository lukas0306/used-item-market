import MyPointUI from "./myPoint.presenter";
import Head from "next/head";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGEDIN,
} from "./myPoint.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPoint() {
  const [myPoint, setMyPoint] = useState();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  function onChangeMyPoint(event) {
    setMyPoint(event.target.value);
  }
  function onClickPayment() {
    if (myPoint === "" || isNaN(myPoint) === true) {
      alert("포인트금액(숫자)를 입력해주세요.");
      return;
    }
    if (myPoint < 100) {
      alert("100원 이상 결제 해주세요.");
      return;
    }

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp49910675
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 회사마다 주문번호 만드는 규칙이 있음
        name: `포인트 ${myPoint} `,
        amount: myPoint,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 금천구 시흥대로",
        buyer_postcode: "08608",
        m_redirect_url: "",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp); // rsp안에 결제 정보가 다 담겨져있다.
          // 이것을 이용해 백엔드에 넣어주면 이용자의 결제내역을 확인할 수 도있고
          // 포인트제도 등 을 적용할 수 있다.
          createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });
          alert(`포인트 ${myPoint}이 충전되었습니다!`);
          location.reload();
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  }
  return (
    <>
      <MyPointUI
        onChangeMyPoint={onChangeMyPoint}
        onClickPayment={onClickPayment}
        data={data}
      />
    </>
  );
}
