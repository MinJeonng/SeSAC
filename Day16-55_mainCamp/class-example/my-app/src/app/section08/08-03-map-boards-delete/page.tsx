'use client';

import { gql, useMutation, useQuery } from '@apollo/client';
import { Fragment } from 'react';

// 게시글 조회하기
const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      _id
      number
      message
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (e) => {
    deleteBoard({
      variables: {
        number: Number(e.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }], // 리페치를 통해 삭제되면 화면에서도 그 글이 삭제되는 거를 바로 확인할 수 있음
    });

    // console.log(data.deleteBoard.number);
    // alert(`${e.number}가 삭제되었습니다.`);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        // key에는 index를 쓰지 않음 왜냐하면 만약 3번 Index를 삭제한다고 해도, 글이 사라지는 거지 Index가 삭제되는게 아니니까
        // 그냥 밑에 있던 글이 위로 올라와서 그 자리를 대신할 뿐이니까 !!! so, key에는 index를 사용하지 않음
        // 요약 : index는 게시글을 삭제할때, 다음 게시글이 올라오면서 유지되므로 사실상 유일하지 않음

        // 그러면 삭제나 이런게 아니라 그냥 보여주기만 하는거라면 key를 index로 해도 되나? -> no, 왜냐하면 따로 고유하게 Index를 만드는게 아니라면, 그 index가 유지된다는 성질 때문에 쓰지 말라는 거니까!

        // 1. 특별한 이유가 없으면? fragment로 감싸자. <div></div>로 감싸면 1개 더 그려야하니까
        // 2. fragment는 <></> , <Fragment></Fragment> 두개로 표현가능
        // 3. 만약 프레그먼트에 key를 쓰려면  <Fragment key={el.number}></Fragment>로 쓰면됌
        <div key={el.number}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: '10px' }}>{el.number}</span>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제하기
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
