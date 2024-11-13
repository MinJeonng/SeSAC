'use client';

import { gql, useMutation, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

// 이거는 실패해도 상관없다!! 그런거에만 써야함 상황마다 잘 판단해야함
export default function OptimisticUIPage() {
  const { boardId } = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: '6731ce399712e0002973f188' },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);
  const onClickLike = () => {
    likeBoard({
      variables: { boardId: '6731ce399712e0002973f188' },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },

      // id, _id가 있어야 cache가 된다. 이건 하나의 리턴타입
      update: (cache, { data }) => {
        // 즉 여기서 data.likeBoard는 저 위에서 만들어진 가짜데이터를 보이게 되는 것!! 즉, 여기서 data가 윗줄의 값이 들어와지는 것
        // 백엔드에서 좋아요 결과를 받지도 않았지만 가짜 데이터를 이용해 리렌더를 아주 빨리 하게 보여주는 것!
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: '6731ce399712e0002973f188' },
          // data를 이 안에 처럼 바꿔줘라. 라는 뜻!
          data: {
            fetchBoard: {
              _id: '6731ce399712e0002973f188',
              __typename: 'Board',
              // 좋아요 갯수 -> optimisticResponse로 가짜 데이터를 만들어줘서 좀 더 지나서 진짜 데이터를 넘겨주는 거! 즉, 바로 화면을 리렌더하므로 고객입장에선 불편함이 없음
              likeCount: data?.likeBoard, // likeCount: data.likeBoard
            },
          },
        }); //writeQuery: 없는 것도 만들어 낼 수 있음, modify는 있는걸 수정하기!!!!
      },
    });
  };
  return (
    <>
      <div>현재카운트(좋아요) : {data?.fetchBoard.likeCount ?? 0}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
