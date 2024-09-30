'use client';

import { gql, useQuery } from '@apollo/client';

// 게시글 조회하기
const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);
  // 일케 되면 맨 처음에 undefined가 뜨고, 그 다음에 ㄱ정보를 불러오기 때문에
  // 값이 없으니까 에러가 뜰 수 밖에 없음 밑에 data.fetchedBoard.writer 라고 하게 되면 에러

  return (
    <>
      {/* 1. 삼항연산자 */}
      <div>내용 : {data ? data.fetchBoard.contents : ''}</div>

      {/* 2. &&해서 하기 */}
      <div>작성자 : {data && data.fetchBoard.writer}</div>

      {/* 3. ? 옵셔널 체이닝  : 있으면 쓰고, 없으면 쓰지마 */}
      <div>제목 : {data?.fetchBoard.title}</div>
    </>
  );
}
