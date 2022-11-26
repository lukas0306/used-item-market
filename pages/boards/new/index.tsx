import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

const BoardsNewPage = () => {
  return <BoardWrite />;
};

export default withAuth(BoardsNewPage);
