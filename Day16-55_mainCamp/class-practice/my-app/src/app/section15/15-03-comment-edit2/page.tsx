'use client';

import { gql, useQuery } from '@apollo/client';
import { MouseEvent, useState } from 'react';

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
  const { data } = useQuery(FETCH_BOARDS);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedIndex(Number(e.currentTarget.id));
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        selectedIndex !== index ? (
          <div key={el._id}>
            <span style={{ margin: '10px' }}>{el.title}</span>
            <span style={{ margin: '10px' }}>{el.writer}</span>
            <button id={index} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          // 수정하기를 누르면 Input창으로 변환
          <input type="text" key={el._id} />
        )
      )}
    </div>
  );
}
