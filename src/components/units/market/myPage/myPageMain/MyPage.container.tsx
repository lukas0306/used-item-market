import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import MyPageUI from "./MyPage.presenter";
import styled from "@emotion/styled";
import {
  FETCH_USER_LOGGEDIN,
  CEATE_POINT_LOADING,
  FETCH_COUNT_IBOUGHT,
  FETCH_COUNT_ISOLD,
} from "./MyPage.queries";
import router from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [createPoint] = useMutation(CEATE_POINT_LOADING);
  const [point, setPoint] = useState(0);
  const { data: dataIBought } = useQuery(FETCH_COUNT_IBOUGHT);
  const { data: dataISold } = useQuery(FETCH_COUNT_ISOLD);

  function onClickPayment() {
    const IMP = window.IMP;
    IMP.init("imp49910675"); // Example: imp49910675 //mine imp43608408
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트",
        amount: Number(point),
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", //모바일 결제 후 리다이렉트 될 주소
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          createPoint({
            variables: { impUid: String(rsp.imp_uid) },
            // refetchQueries: [{ query: FETCH_USER_LOGGEDIN }],
          });
          alert("포인트가 충전되었습니다.");
          location.reload();
        } else {
          // 결제 실패 시
        }
      }
    );
  }
  function onClickMoveToMyPoint() {
    router.push("mypage/myPoint");
  }

  function onChangePoint(event: any) {
    setPoint(event.target.value);
  }

  return (
    <>
      <MyPageUI
        onClickPayment={onClickPayment}
        data={data}
        dataIBought={dataIBought}
        dataISold={dataISold}
        onChangePoint={onChangePoint}
        onClickMoveToMyPoint={onClickMoveToMyPoint}
      />
    </>
  );
}
