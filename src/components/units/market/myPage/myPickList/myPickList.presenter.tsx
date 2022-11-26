import SmallCommonButton from "../../../../commons/buttons/03/SmallCommonButton";
import {
  Wrapper,
  WrapperHeader,
  ProductMenu,
  PickMenu,
  RowName,
  ColumnName,
  Row,
  Column,
  ColumnTitle,
  ColumnSoldOut,
  PickColumnTitle,
  MenuWrapper,
  SearchWrapper,
  SearchInput,
  WrapperBody,
} from "./myPickList.styles";

export default function MyPickListUI(props: any) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <MenuWrapper>
            <PickMenu>찜목록</PickMenu>
          </MenuWrapper>
        </WrapperHeader>
        <WrapperBody>
          <RowName>
            <ColumnName>번호</ColumnName>
            <PickColumnTitle>상품명</PickColumnTitle>
            <ColumnSoldOut></ColumnSoldOut>
            <ColumnName>판매가격</ColumnName>
            <ColumnName>판매자</ColumnName>
            <ColumnName>날짜</ColumnName>
          </RowName>
          {props.pickData?.fetchUseditemsIPicked.map(
            (el: any, index: number) => (
              <Row key={el._id}>
                <Column>{index + 1}</Column>
                <PickColumnTitle
                  id={el._id}
                  onClick={props.onClickMoveItemDetail}
                >
                  {el.name}{" "}
                </PickColumnTitle>
                <ColumnSoldOut>{el?.buyer?.name && "판매완료"}</ColumnSoldOut>
                <Column>￦ {el.price.toLocaleString("ko-KR")}</Column>
                <Column>{el.seller.name}</Column>
                <Column>{el.createdAt.slice(0, 10)}</Column>
              </Row>
            )
          )}
        </WrapperBody>
      </Wrapper>
    </>
  );
}
