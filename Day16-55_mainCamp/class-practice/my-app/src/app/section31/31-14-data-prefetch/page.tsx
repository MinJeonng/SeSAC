'use client';

import { gql, useApolloClient, useQuery } from '@apollo/client';
import Link from 'next/link';
import _ from 'lodash';

// 게시글 조회하기
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

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
  const { data } = useQuery(FETCH_BOARDS);
  const client = useApolloClient();

  // 디바운싱을 줘서 0.2초 뒤에 fetch 받아오게끔, 그렇게 안하면 불필요한거까지 받아오게 되니까!
  const preFetchBoardDebounce = _.debounce((boardId) => {
    client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  }, 200);

  //데이터를 미리 가지고 오자. 즉, 마우스가 올라갔을때 가지고 온다
  const preFetchBoard = (boardId) => () => {
    preFetchBoardDebounce(boardId);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <Link href={`/section31/31-14-data-prefetch-moved/${el._id}`}>
            <span
              style={{ margin: '10px' }}
              onMouseOver={preFetchBoard(el._id)}
            >
              {el.title}
            </span>
          </Link>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
