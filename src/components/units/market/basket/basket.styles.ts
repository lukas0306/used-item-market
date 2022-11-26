import styled from "@emotion/styled";

export const BasketWrapper = styled.div``;

export const Wrapper = styled.div`
  width: 1380px;
  padding-top: 56px;
  padding-right: 360px;
  padding-left: 40px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductMenu = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  margin-right: 25px;
  color: #bbb0d4;
`;

export const PickMenu = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  margin-right: 25px;
  color: #bbb0d4;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const RowName = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  text-align: center;
  border-top: 1px solid #bdbdbd;
  align-items: center;
  margin-top: 16px;

  font-family: myfont;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const ColumnName = styled.div`
  width: 10%;
`;

export const Row = styled.div`
  height: 52px;

  display: flex;
  flex-direction: row;
  align-items: center;

  text-align: center;
  border-top: 1px solid #bdbdbd;
  font-family: myfont;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;
export const Column = styled.div`
  width: 10%;
`;

export const ColumnSoldOut = styled.div`
  width: 20%;
  font-family: myfont;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #00bfa5;
`;

export const ColumnTitle = styled.div`
  width: 50%;
`;

export const PickColumnTitle = styled.div`
  width: 40%;
  cursor: pointer;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SearchInput = styled.input`
  width: 368px;
  height: 52px;
  background: #f2f2f2;
  margin-right: 24px;
  border: none;
`;
export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeleteBtn = styled.button`
  width: 80px;
  height: 40px;
  text-align: center;
  box-shadow: 0 0 20px #eee;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  background-color: #e6e1f2;
  cursor: pointer;
  :hover {
    background-color: #bbb0d4;
    color: white;
  }
`;
