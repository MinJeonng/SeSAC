// 게시글 목록
'use client';

import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

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
  console.log(data);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Link
          key={el.number}
          href={`/section30/30-03-web-editor-hook-form-xss/${el._id}`}
        >
          <div>
            <span style={{ margin: '10px' }}>{el.title}</span>
            <span style={{ margin: '10px' }}>{el.writer}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
