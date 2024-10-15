'use client';

import { FetchBoardsDocument } from '@/commons/gql/graphql';
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
  const { data } = useQuery(FetchBoardsDocument);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <CommentItem el={el} key={el._id} />
      ))}
    </div>
  );
}
