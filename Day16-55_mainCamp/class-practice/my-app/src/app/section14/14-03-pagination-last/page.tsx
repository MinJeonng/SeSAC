'use client';

import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

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
  query {
    fetchBoardsCount
  }
`;
export default function StaticRoutingMovedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);

  // 구조분해할당으로 이름을 바꿀 수 있음, 그래서 여기선 boardsCountData가 data 역할을 하게 됌
  const { data: boardsCountData } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((boardsCountData?.fetchBoardsCount ?? 10) / 10);

  console.log(data);

  const onClickPage = (e) => {
    refetch({ page: Number(e.currentTarget.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  // 리스트 있는데까지만 해서 마지막페이지를 보이게 하는 방법
  // 1. 마지막 페이지 구하기 2. 마지막 페이지에 의존해서 다음페이지 구하기
  const onClickNextPage = () => {
    // 시작페이지가 lastpage보다 작아야 다음페이지가 활성화되고 그게 크다면 비활성화 !! 당연하지(값이 없는데... 144개의 글이 있어 근데 15페이지까지만 있으면 되고 21페이지는 필요없으니까)
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>{`<`}</span>
      {new Array(10).fill('').map(
        (_, index) =>
          // 마지막 페이지보다 작은 페이지들만 보여지게 하는 방법
          index + startPage <= lastPage && (
            <span
              id={String(index + startPage)}
              key={index + startPage}
              onClick={onClickPage}
              style={{ margin: '10px' }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>{`>`}</span>
    </div>
  );
}
