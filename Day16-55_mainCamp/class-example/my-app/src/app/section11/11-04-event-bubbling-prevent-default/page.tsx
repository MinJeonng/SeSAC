'use client';

import CheckBox from '@/components/11-03-event-bubbling-stop-propagation-component';
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

  const onClickLike = (e) => {
    //e.stopPropagation(); // 이거를 써도 페이지가 넘어감
    e.preventDefault();
    alert('좋아요');
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        // e.stopPropagation() :
        // 그냥 이렇게 되면 좋아요라는 alert가 눌러지고 갑자기 페이지 이동이 되어버림
        // 상위 onClick을 방어해주는 거지, 기본기능은 그대로 실행되는 것
        <a key={el.number} href="https://naver.com">
          <div key={el.number} id={el.writer}>
            <CheckBox />
            <span style={{ margin: '10px' }}>{el.number}</span>
            <span style={{ margin: '10px' }}>{el.title}</span>
            <span style={{ margin: '10px' }}>{el.writer}</span>
            <span onClick={onClickLike}>좋아요</span>
          </div>
        </a>
      ))}
    </div>
  );
}
