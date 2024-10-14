'use client';

import List from '@/components/14-06-pagination-last-refactoring-ts/list';
import Pagination from '@/components/14-06-pagination-last-refactoring-ts/pagination';
import { gql, useQuery } from '@apollo/client';

// 게시글 조회하기
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
// 몇개의 게시글인지 count를 얻을 수 있음
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  // 구조분해할당으로 이름을 바꿀 수 있음, 그래서 여기선 boardsCountData가 data 역할을 하게 됌
  const { data: boardsCountData } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((boardsCountData?.fetchBoardsCount ?? 10) / 10);

  console.log(data);

  return (
    <div>
      <List data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
