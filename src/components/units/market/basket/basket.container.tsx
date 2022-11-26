import BasketUI from "./basket.presenter";
import { useState, useEffect } from "react";
import router from "next/router";

export default function Basket() {
  const [baskets, setBaskets] = useState([]);

  const onCLickDelete = (id: string) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    const newBaskets = baskets.filter((el: any) => el._id !== id);
    localStorage.setItem("basket", JSON.stringify(newBaskets));
    setBaskets(newBaskets);
    alert("상품이 장바구니에서 삭제되었습니다.");
  };

  function onClickMoveItemDetail(event: any) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  useEffect(() => {
    setBaskets(JSON.parse(localStorage.getItem("basket") || "[]"));
  }, []);

  return (
    <BasketUI
      baskets={baskets}
      onCLickDelete={onCLickDelete}
      onClickMoveItemDetail={onClickMoveItemDetail}
    />
  );
}
