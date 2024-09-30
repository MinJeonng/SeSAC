'use client';

import { useRouter } from 'next/navigation';

// 다이나믹은 말 그대로 페이지별로 필요한 모든 폴더를 만들지 않아도 그냥 url에서 보고싶은
// 게시물 번호 쓰면 되는 것

export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickSubmit1 = () => {
    router.push('/section07/07-03-dynamic-routing-board-moved/1');
  };
  const onClickSubmit2 = () => {
    router.push('/section07/07-03-dynamic-routing-board-moved/2');
  };
  const onClickSubmit3 = () => {
    router.push('/section07/07-03-dynamic-routing-board-moved/50');
  };
  return (
    <>
      <button onClick={onClickSubmit1}>1번게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit2}>2번게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit3}>50번게시글 등록하기</button>
    </>
  );
}
