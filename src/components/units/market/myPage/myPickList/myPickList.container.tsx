import { useQuery } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import MyMarketUI from "./myPickList.presenter";
import {
  FETCH_USEDITEM_IPICKED,
  FETCH_USEDITEM_ISOLD,
} from "./myPickList.queries";

export default function MyPickList() {
  const [isPickList, setIsPickList] = useState(false);
  const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });

  const { data: pickData } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: { search: "" },
  });

  // function onClickMyPickList() {
  //   setIsPickList(true);
  // }

  // function onClickMyProductList() {
  //   setIsPickList(false);
  // }

  function onClickMoveItemDetail(event: any) {
    router.push(`/market/${event.currentTarget.id}`);
  }
  return (
    <MyMarketUI
      data={data}
      pickData={pickData}
      isPickList={isPickList}
      // onClickMyProductList={onClickMyProductList}
      // onClickMyPickList={onClickMyPickList}
      onClickMoveItemDetail={onClickMoveItemDetail}
    />
  );
}
