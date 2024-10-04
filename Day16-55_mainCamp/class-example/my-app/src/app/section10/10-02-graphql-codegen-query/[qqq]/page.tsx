'use client';

// graphql-codegen 을 다운받고 config을 만들면, 타입이랑 데이터까지 받아와주는 것
import { FetchBoardDocument } from '@/commons/gql/graphql';
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
  const params = useParams();

  const { data } = useQuery(FetchBoardDocument, {
    variables: {
      number: Number(params.qqq),
    },
  });
  // data?.fetchBoard.title 이렇게 추론가능
  console.log(data);

  return (
    <>
      {/* 1. 삼항연산자 */}
      <div>내용 : {data ? data.fetchBoard?.contents : ''}</div>

      {/* 2. &&해서 하기 */}
      <div>작성자 : {data && data.fetchBoard?.writer}</div>

      {/* 3. ? 옵셔널 체이닝  : 있으면 쓰고, 없으면 쓰지마 */}
      <div>제목 : {data?.fetchBoard?.title}</div>
    </>
  );
}
