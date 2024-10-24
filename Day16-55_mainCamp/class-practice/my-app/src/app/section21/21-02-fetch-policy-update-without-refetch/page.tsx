'use client';

import { gql, useMutation, useQuery } from '@apollo/client';

// 게시글 조회하기
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const UPDATE_BOARD = gql`
  mutation updateBoard {
    updateBoard(
      boardId: "6719bccf5413b3002914df98"
      password: "1234"
      updateBoardInput: { title: "제목 수정 변경", contents: "내용 변경" }
    ) {
      _id
      title
      writer
      contents
    }
  }
`;

// 캐시는 _id, typename을 가지고 해당 내용을 찾는다 그래서 refetch를 하지 않아도 수정된게 바로 보이게 되는 것
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickUpdate = () => {
    updateBoard();
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}

      <button onClick={onClickUpdate}>수정</button>
    </div>
  );
}
