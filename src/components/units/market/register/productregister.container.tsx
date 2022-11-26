import ProductRegitserUI from "../register/productregister.presenter";
import React, { useState, useEffect } from "react";
import { FormValues } from "./productregister.types";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PRODUCT, UPDATE_USEDITEM } from "./productregister.queries";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../detail/MarketDetail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductRegister(props: any) {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  async function onClickSubmit(data: FormValues) {
    try {
      const result = await createProduct({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            images: fileUrls,
            useditemAddress: {
              zipcode: myZonecode,
              address: myAddress,
              lat,
              lng,
            },
          },
        },
      });
      alert("상품이 등록되었습니다.");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      error instanceof Error && alert(error.message);
    }
  }

  async function onClickUpdate(data: FormValues) {
    const updateUseditemInput = {
      name: data.name,
      remarks: data.remarks,
      contents: data.contents,
      price: data.price,
      images: fileUrls,
      useditemAddress: {
        zipcode: myZonecode,
        address: myAddress,
        lat,
        lng,
      },
    };

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
      });
      alert("수정이 완료되었습니다.");
      router.push(`/market/${router.query.useditemId}`);
    } catch (error) {
      error instanceof Error && alert(error.message);
    }
  }

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
          data?.fetchUseditem.useditemAddress?.address
            ? `${data?.fetchUseditem.useditemAddress?.address}`
            : `${myAddress}`,
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
              setLat(coords.Ma);
              setLng(coords.La);
            }
          }
        );
      });
    };
  }, [data, myAddress]);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);
    setIsOpen(false);
  };

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <ProductRegitserUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      myAddress={myAddress}
      myZonecode={myZonecode}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
    />
  );
}
