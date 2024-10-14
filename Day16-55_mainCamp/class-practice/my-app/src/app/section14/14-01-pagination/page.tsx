'use client';

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
export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickPage = (e) => {
    refetch({ page: Number(e.currentTarget.id) });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
      {/* fill()안에는 아무거나 들어가도 됌. 어차피 값들이 다 생기게 될 거니까 */}
      {new Array(10).fill('철수').map((_, index) => (
        <span
          id={String(index + 1)}
          key={index + 1}
          onClick={onClickPage}
          style={{ margin: '10px' }}
        >
          {index + 1}
        </span>
      ))}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span
          id={String(el)}
          key={el}
          onClick={onClickPage}
          style={{ margin: '10px' }}
        >
          {el}
        </span>
      ))} */}
      {/* 아래 방법보다 위에꺼가 효율적 */}
      {/* <span id="1" onClick={onClickPage}>
        {' '}
        1{' '}
      </span>
      <span id="2" onClick={onClickPage}>
        {' '}
        2{' '}
      </span>
      <span id="3" onClick={onClickPage}>
        {' '}
        3{' '}
      </span> */}
    </div>
  );
}
