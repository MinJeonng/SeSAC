'use client';

import { useRouter } from 'next/navigation';

export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickSubmit = () => {
    //1. 게시글 등록하기
    //2. 등록된 페이지로 이동하기
    // push(여기에 이동할 페이지를 써주면됌)
    router.push('/section07/07-01-static-routing-moved');
  };
  return <button onClick={onClickSubmit}>게시글 등록하기</button>;
}
