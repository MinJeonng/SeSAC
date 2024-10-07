'use client';

import { gql, useQuery } from '@apollo/client';

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

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data, 'data');

  // const onClickCheckBox = (e) => {
  //   // e.target : 내가 클릭한 태그
  //   // e.currentTarget.id => 내 클릭이 버블링되면 부모꺼 onClick이 실행되는데, 현재 실행된 그 태그
  //   alert(e.currentTarget.id);
  // };

  const qqq1 = () => {
    alert('1번클릭');
  };
  const qqq2 = () => {
    alert('2번클릭');
  };
  const qqq3 = () => {
    alert('3번클릭');
  };
  const qqq4 = () => {
    alert('4번클릭');
  };
  const qqq5 = () => {
    alert('5번클릭');
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number} id={el.writer} onClick={qqq1}>
          <span onClick={qqq2}>
            {/* checkbox 클릭하면 자식이 먼저 클릭되고, 그 위에, 그 위에! (3-2-1)순서 */}
            <input type="checkbox" onClick={qqq3} />
          </span>
          <span style={{ margin: '10px' }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: '10px' }} onClick={qqq5}>
            {el.title}
          </span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
