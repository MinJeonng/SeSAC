'use client';

import CommentItem from '@/components/15-04-comment-edit3';
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
  const [selectedIndex, setSelectedIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    const qqq = [...selectedIndex];
    qqq[Number(e.currentTarget.id)] = true;
    setSelectedIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <CommentItem el={el} key={el._id} />
      ))}
    </div>
  );
}
