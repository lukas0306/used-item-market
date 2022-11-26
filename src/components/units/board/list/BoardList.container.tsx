import BoardListUI from "./BoardList.presenter";
import { gql, useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_BEST,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState, MouseEvent, ChangeEvent } from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../src/commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const { data: boardsBest } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BOARDS_BEST);

  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 0;

  // function onClickPage(event: MouseEvent<HTMLSpanElement>) {
  //   if (event.target instanceof Element)
  //     refetch({ page: Number(event.target.id) });
  // }

  function onClickPrevPage() {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 5 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  function onClickMoveToBestBoard(event) {
    router.push(`/boards/${event.target.id}`);
  }

  const [myKeyword, setMyKeyword] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    event.target instanceof Element &&
      refetch({ search: myKeyword, page: Number(event.target.id) });
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickMoveToBestBoard={onClickMoveToBestBoard}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onChangeSearch={onChangeSearch}
      startPage={startPage}
      lastPage={lastPage}
      boardsBest={boardsBest}
      myKeyword={myKeyword}
    />
  );
}
