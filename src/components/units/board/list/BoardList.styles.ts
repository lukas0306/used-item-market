import styled from "@emotion/styled";
import { LikeOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

interface ITextTokenProps {
  isMatched: boolean;
}

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  :hover {
    color: blue;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #e6e1f2;
    cursor: pointer;
  }
`;

export const CommentPagination = styled.div``;

export const BestBoardWrapper = styled.div`
  display: flex;
`;
export const BestBoard = styled.div`
  width: 282px;
  border: solid black 1px;
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  cursor: pointer;
`;

export const BestBoardHeader = styled.img`
  width: 100%;
  height: 280px;
`;
export const BestBoardContents = styled.div`
  /* display: flex;
  flex-direction: column; */
`;
export const BestBoardBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px;
`;
export const BestBoardTitle = styled.div`
  margin: 0px 10px;
  font-size: 18px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const BestBoardWriter = styled.div``;
export const LikeCounter = styled.div``;
export const BestBoardDate = styled.div`
  font-size: 12px;
`;
export const BestBoardCount = styled.div`
  margin-right: 10px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  color: gold;
  cursor: pointer;
`;

interface IProps {
  isMatched: boolean;
}
export const MyWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export const Searchbar = styled.div`
  width: 220px;
  height: 30px;
  border-radius: 15px;
  background-color: #f5f2fc;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;

export const SearchIcon = styled(SearchOutlined)`
  color: black;
  font-size: 20px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
