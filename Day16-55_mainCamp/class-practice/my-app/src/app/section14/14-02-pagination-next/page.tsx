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
export default function StaticRoutingMovedPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (e) => {
    refetch({ page: Number(e.currentTarget.id) });
  };
  const onClickPrevPage = () => {
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    setStartPage(startPage + 10);
    // refecth를 한다는건 말그대로 page 인수 넘겨줄때 page를 넘겨주는 것 그래서 그에 맞는 결과 보이게끔
    refetch({ page: startPage + 10 });
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
      {new Array(10).fill('철수').map((_, index) => (
        <span
          id={String(index + startPage)}
          key={index + startPage}
          onClick={onClickPage}
          style={{ margin: '10px' }}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>{`>`}</span>
    </div>
  );
}
