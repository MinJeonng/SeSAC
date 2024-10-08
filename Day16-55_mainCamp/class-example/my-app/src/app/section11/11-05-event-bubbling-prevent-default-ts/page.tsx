'use client';

import { FetchBoardsDocument } from '@/commons/gql/graphql';
import CheckBox from '@/components/11-03-event-bubbling-stop-propagation-component';
import { useQuery } from '@apollo/client';
import { MouseEvent } from 'react';

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FetchBoardsDocument);

  const onClickLike = (e: MouseEvent<HTMLSpanElement>) => {
    //e.stopPropagation(); // 이거를 써도 페이지가 넘어감
    e.preventDefault();
    alert('좋아요');
  };
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        // e.stopPropagation() :
        // 그냥 이렇게 되면 좋아요라는 alert가 눌러지고 갑자기 페이지 이동이 되어버림
        // 상위 onClick을 방어해주는 거지, 기본기능은 그대로 실행되는 것
        <a key={el.number} href="https://naver.com">
          <div key={el.number} id={el.writer ?? '작성자없음'}>
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
