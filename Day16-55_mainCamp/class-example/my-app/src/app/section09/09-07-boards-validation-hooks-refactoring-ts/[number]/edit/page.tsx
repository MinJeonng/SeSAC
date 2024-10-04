//수정
//수정하는 페이지에 들어왔을때 초기값이 보여야함
'use client';

import BoardsWrite from '@/components/09-07-boards-write-validation-hooks-refactoring-ts';
import { gql, useQuery } from '@apollo/client';
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

export default function BoardEditPage() {
  const params = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(params.number),
    },
  });
  return (
    <>
      {/* 조회하고 데이터를 컴포넌트로 넘겨주는 것props로 */}
      {/* 처음에는 undefined가 넘어가고 시간 지나고 실제 데이터가 들어간다 총 두번 들어가는것 */}
      <BoardsWrite isEdit={true} data={data} />
    </>
  );
}
