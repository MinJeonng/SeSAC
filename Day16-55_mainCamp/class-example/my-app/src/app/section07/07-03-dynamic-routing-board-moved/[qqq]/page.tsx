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
  //params.qqq :  2번 버튼에서 누르고 들어왔다?! 그러면 qqq에는 2가 들어가는 것
  // url의 숫자는 정수인지, 숫자형인지 모르기 때문에 number해줘야하는 것

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(params.qqq),
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
