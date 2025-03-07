'use client';

import { gql, useQuery } from '@apollo/client';
import { Modal } from 'antd';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);

  const onClickModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}

      <br />
      <button onClick={onClickModalOpen}>게시글 쓰기</button>
      {isOpen && (
        <Modal open={true}>
          제목 입력 : <input type="text" />
          내용 입력 : <input type="text" />
        </Modal>
      )}
    </div>
  );
}
