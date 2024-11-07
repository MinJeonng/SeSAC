'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

// 게시글 조회하기
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const params = useParams();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: params.boardId,
    },
  });
  console.log(data);

  return (
    <>
      {/* 내용에 들어있는 태그를 문자열이 아닌 진짜 태그로 인식하기 */}
      {/* <div>내용 : {data ? data.fetchBoard.contents : ''}</div> */}
      <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard?.contents,
        }}
      />

      {/* 2. &&해서 하기 */}
      <div>작성자 : {data && data.fetchBoard.writer}</div>

      {/* 3. ? 옵셔널 체이닝  : 있으면 쓰고, 없으면 쓰지마 */}
      <div>제목 : {data?.fetchBoard.title}</div>
    </>
  );
}
