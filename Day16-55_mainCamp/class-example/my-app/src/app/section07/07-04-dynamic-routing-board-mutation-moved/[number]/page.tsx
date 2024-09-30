'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

// 게시글 조회하기
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;
export default function StaticRoutingMovedPage() {
  // 구버전 방식
  // const router = useRouter()
  // router.push('')
  // router.query.qqq

  //신버전 방식
  const params = useParams();
  // params.number : 여기서 number라는 대괄호 안에 들어간 이름은 아무거나 해도 상관없음

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(params.number),
    },
  });
  console.log(data);

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
