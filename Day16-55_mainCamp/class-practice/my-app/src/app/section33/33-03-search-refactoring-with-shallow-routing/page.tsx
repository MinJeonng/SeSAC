'use client';

import Pagination from '@/components/33-03-search-refactoring-with-shallow-routing/Pagination';
import List from '@/components/33-03-search-refactoring-with-shallow-routing/List';
import Search from '@/components/33-03-search-refactoring-with-shallow-routing/Search';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

// 게시글 조회하기
const FETCH_BOARDS_SEARCH = gql`
  query fetchBoardsSearch($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const [search, setSearch] = useState('');
  const { data, refetch } = useQuery(FETCH_BOARDS_SEARCH);
  console.log(data);

  const onClickPage = (e) => {
    // 검색에서 refetch할때 search 검색어가 refetch에 저장되어 있는 상태이므로, 여기서 굳이 추가 안해도 됌
    refetch({ page: Number(e.currentTarget.id) });
  };

  const onChangeSearch = (e) => {
    setSearch(e.currentTarget.value);
  };
  const onClickSearch = () => {
    // search : search
    refetch({ search, page: 1 });
  };
  return (
    // 주로 이렇게 한번에 검색, 게시글 목록, 페이지네이션 이렇게 한번에 쓰이지 않음 . 각각의 컴포넌트로 만들어지고 이걸 결합해서 페이지에선 조립만 해야함

    <div>
      <Search />
      <List />
      <Pagination />
    </div>
  );
}
