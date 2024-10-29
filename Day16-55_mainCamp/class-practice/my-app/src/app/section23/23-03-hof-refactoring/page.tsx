'use client';

import { gql, useQuery } from '@apollo/client';

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
export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log(data);

  //1. 리팩토링 전
  // const onClickPage = (e) => {
  //   refetch({ page: Number(e.currentTarget.id) });
  // };

  // 2. 리팩토링 후
  // 페이지 번호를 직접 받아서 처리하는 방식으로, 이벤트 객체를 사용하지 않습니다.
  /**
   * 두 개의 괄호는 커링(Currying)으로, 첫 번째 괄호에서는 page를 넘기고, 두 번째 괄호는 실제로 호출되었을 때 실행되는 함수로 만들어졌습니다.
   * page: number를 받아 내부에서 refetch를 호출하도록 했기 때문에 e 이벤트 객체가 필요하지 않습니다.
   * 이 방식에서는 onClickPage 함수가 page 매개변수를 클로저로 묶어 두고, 필요한 시점에 실행함으로써 이벤트 객체 없이 원하는 page 값을 사용할 수 있습니다.
   * 이렇게 하면 불필요한 이벤트 객체 참조를 피하고, 코드가 더 직관적이며 이벤트에서 특정 값을 넘기기 위해 id 속성 등을 설정하는 번거로움을 줄일 수 있습니다.
   *
   */
  const onClickPage = (page: number) => () => {
    refetch({ page });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
      {/* fill()안에는 아무거나 들어가도 됌. 어차피 값들이 다 생기게 될 거니까 */}
      {new Array(10).fill('철수').map((_, index) => (
        <span
          key={index + 1}
          onClick={onClickPage(index + 1)}
          style={{ margin: '10px' }}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}
