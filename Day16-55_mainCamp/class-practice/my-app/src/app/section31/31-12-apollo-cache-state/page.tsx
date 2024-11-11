'use client';

import { gql, useMutation, useQuery } from '@apollo/client';

// 게시글 조회하기
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data);

  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: 'testUser',
          password: '1234',
          title: 'testTitle',
          contents: 'testContents',
        },
      },
      //refetchQueries : [{query : FETCH_BOARDS}] -> refetch없이 리팩토링
      //  여기서 data는 등록하고 나서 난 결과물, cache는 원래 있던거(객체형태) -> 결국 원래 있떤거에 새로운걸 추가해주면됌
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  // 맨 첫줄 첫번째 괄호가 (인수받는) 두번째는 (event)
  const onClickDelete = (boardId) => async () => {
    await deleteBoard({
      variables: { boardId },
      //refetchQueries : [{query : FETCH_BOARDS}]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              console.log(prev); // 이거 보면 id가 아니라 ref형태다. 그래서 el._id가 안됌 그래서 이 안에 참조해있는 id를 뽑겠다가 readField
              const deleteId = data.deleteBoard; // _id : 삭제완료된 ID
              //배열에서는 filter를 써서 삭제하면됌
              const filterPrev = prev.filter(
                (el) => readField('_id', el) !== deleteId
              );
              return [...filterPrev]; // 삭제된 id 제외한 나머지만 리턴
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
    </div>
  );
}
