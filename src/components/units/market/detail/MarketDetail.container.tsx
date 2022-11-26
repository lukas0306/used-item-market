import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsIPickedArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  BUY_USEDITEM,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USER_LOGGEDIN,
} from "./MarketDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketDetail() {
  const [isPicked, setIsPicked] = useState(false);
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });
  const { data: loggedinData } = useQuery(FETCH_USER_LOGGEDIN);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const [toggleUseditemPick] = useMutation(USEDITEM_PICK);
  const [buyUseditem] = useMutation(BUY_USEDITEM);
  //내가 찜한 목록들 ID
  const newPicked = data2?.fetchUseditemsIPicked.map((el) => el._id);
  //내가 등록한 게시글인지 확인하기 위한 ID
  const sellerId = data?.fetchUseditem.seller?._id;
  const myId = loggedinData?.fetchUserLoggedIn._id;

  function onCLickMoveToUpdate() {
    router.push(`/market${router.query.useditemId}/edit`);
  }
  function onClickMoveToList() {
    router.push("/market");
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("상품이 삭제되었습니다.");
      router.push("/market");
    } catch (error) {
      error instanceof Error && console.log(error.message);
    }
  }

  function onClickBasket() {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    let isExists = false;
    baskets.forEach((basketEl: IUseditem) => {
      if (data?.fetchUseditem._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }

    const { ...newEl } = data?.fetchUseditem;
    baskets.push(newEl);

    localStorage.setItem("basket", JSON.stringify(baskets));
    alert("장바구니에 상품을 담았습니다.");
  }
  //상품 수정페이지로 이동
  function onClickEdit() {
    router.push(`/market/${router.query.useditemId}/edit`);
  }

  //상품 찜하기
  function onClickPick() {
    toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.useditemId },
        },
        {
          query: FETCH_USEDITEMS_I_PICKED,
          variables: { search: "", page: 1 },
        },
      ],
    });
  }

  useEffect(() => {
    newPicked?.includes(String(data?.fetchUseditem._id))
      ? setIsPicked(true)
      : setIsPicked(false);
  }, [data2]);

  async function onClickBuyItem() {
    try {
      await buyUseditem({
        variables: { useritemId: router.query.useditemId },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useritemId: router.query.useditemId },
          },
        ],
      });
      alert("상품 구매가 완료되었습니다.");
      router.push("/market");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }
  //지도 표시
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=974b9cbaade1b363c98373c4ab957683&libraries=services";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"), // 지도를 표시할 div
          options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress?.address || "",
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래 장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data]);

  return (
    <MarketDetailUI
      onClickDelete={onClickDelete}
      onCLickMoveToUpdate={onCLickMoveToUpdate}
      onClickMoveToList={onClickMoveToList}
      onClickBasket={onClickBasket}
      onClickEdit={onClickEdit}
      onClickPick={onClickPick}
      onClickBuyItem={onClickBuyItem}
      data={data}
      data2={data2}
      sellerId={sellerId}
      myId={myId}
      isPicked={isPicked}
      newPicked={newPicked}
    />
  );
}
