import SmallCommonButton from "../../../commons/buttons/03/SmallCommonButton";
import * as S from "./MarketDetail.styles";
export default function MarketDetailUI(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.DetailLeft>
          <S.ItemImg
            src={
              props.data?.fetchUseditem?.images.length ===0 || props.data?.fetchUseditem?.images[0]==="" ? "/images/bgimg2.jpeg" :
              `https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`}
          />
          {/* {props.data?.fetchUseditem.useditemAddress?.address ? ( */}

          {/* ) : ( */}
          {/* <div>거래 장소가 등록되지 않았습니다.</div> */}
          {/* )} */}
        </S.DetailLeft>
        <S.DetailRight>
          <S.RightHeader>
            <S.ItemName>{props.data?.fetchUseditem.name}</S.ItemName>{" "}
            <S.ItemTag>{props.data?.fetchUseditem.tags}</S.ItemTag>
            {/* {props.data?.fetchUseditem.pickedCount} */}
            <S.ItemRemarks>{props.data?.fetchUseditem.remarks}</S.ItemRemarks>
            <S.ItemPrice>
              {props.data?.fetchUseditem.price.toLocaleString("ko-KR")}
            </S.ItemPrice>
            <S.ItemWon>원</S.ItemWon>
          </S.RightHeader>
          <S.ItemMain>
            <S.MainTitle>판매자 이름</S.MainTitle>
            <S.MainContents>
              {props.data?.fetchUseditem.seller.name}
            </S.MainContents>
          </S.ItemMain>
          <S.ItemMain>
            <S.MainTitle>판매자 이메일</S.MainTitle>
            <S.MainContents>
              {props.data?.fetchUseditem.seller.email}
            </S.MainContents>
          </S.ItemMain>
          <S.ItemMain>
            <S.MainTitle>상세 설명</S.MainTitle>
            <S.MainContents>
              {props.data?.fetchUseditem.contents}
            </S.MainContents>
          </S.ItemMain>

          {props.myId === props.sellerId ? (
            <>
              <SmallCommonButton onClick={props.onClickEdit}>
                수정하기
              </SmallCommonButton>
              <SmallCommonButton onClick={props.onClickDelete}>
                삭제하기
              </SmallCommonButton>
            </>
          ) : (
            <S.BtnWrapper>
              <S.LikeBtn onClick={props.onClickPick}>
                {props.isPicked ? (
                  <S.LikeImg src="/images/heart.png" alt="찬하트" />
                ) : (
                  <S.LikeImg src="/images/heart1.png" alt="빈하트" />
                )}
              </S.LikeBtn>

              <S.BasketBtn onClick={props.onClickBasket}>장바구니</S.BasketBtn>
              <S.BuyBtn onClick={props.onClickBuyItem}>바로 구매하기</S.BuyBtn>
            </S.BtnWrapper>
          )}
        </S.DetailRight>
      </S.Wrapper>
      <h1>거래장소</h1>
      <S.KakaoMap id="map"></S.KakaoMap>
      <S.Adress>
        {props.data?.fetchUseditem.useditemAddress.address}
        {props.data?.fetchUseditem.useditemAddress.addressDetail}
      </S.Adress>
      <S.Zipcode>{props.data?.fetchUseditem.useditemAddress.zipcode}</S.Zipcode>
    </>
  );
}
