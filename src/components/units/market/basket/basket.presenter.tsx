import * as S from "./basket.styles";
export default function BasketUI(props: any) {
  return (
    <>
      {/* <div>장바구니</div>
      {props.baskets.map((el) => (
        <div key={el._id}>
          <div>{el.name}</div>
          <div>{el.remarks}</div>
          <div>{el.conetents}</div>
          <div>{el.price}</div>
          <button onClick={props.onCLickDelete(el._id)}>삭제하기</button>
        </div>
      ))} */}
      <S.Wrapper>
        <S.WrapperHeader>
          <S.MenuWrapper>
            <S.PickMenu>목록</S.PickMenu>
          </S.MenuWrapper>
        </S.WrapperHeader>
        <S.WrapperBody>
          <S.RowName>
            <S.ColumnName>번호</S.ColumnName>
            <S.PickColumnTitle>상품명</S.PickColumnTitle>
            <S.ColumnSoldOut></S.ColumnSoldOut>
            <S.ColumnName>판매가격</S.ColumnName>
            <S.ColumnName>판매자</S.ColumnName>
          </S.RowName>
          {props.baskets.map((el: any, index: number) => (
            <S.Row key={el._id}>
              <S.Column>{index + 1}</S.Column>
              <S.PickColumnTitle
                id={el._id}
                onClick={props.onClickMoveItemDetail}
              >
                {el.name}
              </S.PickColumnTitle>
              <S.ColumnSoldOut>{el?.buyer?.name && "판매완료"}</S.ColumnSoldOut>
              <S.Column>￦ {el.price.toLocaleString("ko-KR")}</S.Column>
              <S.Column>{el.seller.name}</S.Column>
              <S.DeleteBtn onClick={props.onCLickDelete(el._id)}>
                삭제하기
              </S.DeleteBtn>
            </S.Row>
          ))}
        </S.WrapperBody>
      </S.Wrapper>
    </>
  );
}
