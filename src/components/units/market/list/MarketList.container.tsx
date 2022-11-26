import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS, FETCH_USEDITEMS_BEST } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { ChangeEvent, useState,useEffect } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import router from "next/router";

export default function MarketList() {
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    variables: { search: "" },
  });

  const { data: fetchBest } = useQuery(FETCH_USEDITEMS_BEST);

  //무한 스크롤 product card
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  function onClickMoveItemDetail(event: any) {
    router.push(`/market/${event.currentTarget.id}`);
  }

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  function onClickSearch() {
    refetch({ search: keyword, page: 1 });
    setKeyword(search);
  }

  function onClickPage(event: any) {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event.target.id) });
  }
  const onErrorImg = (event: any) => {
    (event.target as any).style = "display: none;";
  };

  const onPressEnter = (event: any) => {
    if (event.key === "Enter") {
      onClickSearch();
      console.log('enter')
    }
  };

  return (
    <MarketListUI
      fetchBest={fetchBest}
      data={data}
      onLoadMore={onLoadMore}
      startPage={startPage}
      setStartPage={setStartPage}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
      onErrorImg={onErrorImg}
      onClickMoveItemDetail={onClickMoveItemDetail}
      onPressEnter={onPressEnter}
    />
  );
}
