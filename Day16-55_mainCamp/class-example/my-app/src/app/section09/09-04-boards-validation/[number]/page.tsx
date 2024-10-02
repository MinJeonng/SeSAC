//상세페이지
'use client';

import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
export default function BoardDetailPage() {
  const params = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(params.number),
    },
  });
  console.log(data);

  return (
    <>
      {/* 1. 삼항연산자 */}
      <div>상세페이지 입니다.</div>
      <div>내용 : {data ? data.fetchBoard.contents : ''}</div>

      {/* 2. &&해서 하기 */}
      <div>작성자 : {data && data.fetchBoard.writer}</div>

      {/* 3. ? 옵셔널 체이닝  : 있으면 쓰고, 없으면 쓰지마 */}
      <div>제목 : {data?.fetchBoard.title}</div>
      <Link href={`/section09/09-04-boards-validation/${params.number}/edit`}>
        수정
      </Link>
    </>
  );
}
