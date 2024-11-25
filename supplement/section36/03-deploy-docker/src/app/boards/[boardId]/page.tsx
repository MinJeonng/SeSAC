'use client';
import { useParams } from 'next/navigation';

export default function BoardDetailPage() {
  const { boardId } = useParams();
  return (
    <div>
      <div>현재는 게시판 동적페이지</div>
      <div>게시글 아이디 : {boardId}</div>
    </div>
  );
}
