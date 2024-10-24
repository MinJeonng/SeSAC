'use client';

import FetchPolicyExample from '@/components/21-01-fetch-policy';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// 게시글 조회하기
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const router = useRouter();
  // usequery했을때 아폴로 캐시 먼저가서 있으면 그거 받아오고 없으면 백엔드 가서 받아오고
  const { data } = useQuery(FETCH_BOARDS);
  const [isOpen, setIsOpen] = useState(false);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>클릭하면 새로운 컴포넌트 나타남</button>

      {isOpen && <FetchPolicyExample />}
      <div>===========</div>

      {/* 얘를 클릭하게 되면 네트워크 탭에서 graphql이 안뜸. 왜? 아폴로캐시에서 가져오는거지 백엔드(graphql)에서 가져오는게 아니니까  */}
      <button
        onClick={() => router.push('/section21/21-01-fetch-policy-moved')}
      >
        페이지 이동하기
      </button>
    </div>
  );
}
