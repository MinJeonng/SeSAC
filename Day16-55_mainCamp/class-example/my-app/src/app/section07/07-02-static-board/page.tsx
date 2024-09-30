'use client';

import { useRouter } from 'next/navigation';

export default function StaticRoutingPage() {
  const router = useRouter();
  const onClickSubmit1 = () => {
    //1. 게시글 등록하기
    //2. 등록된 페이지로 이동하기
    // push(여기에 이동할 페이지를 써주면됌)
    router.push('/section07/07-02-static-routing-board-moved/1');
  };
  const onClickSubmit2 = () => {
    router.push('/section07/07-02-static-routing-board-moved/2');
  };
  const onClickSubmit3 = () => {
    router.push('/section07/07-02-static-routing-board-moved/3');
  };
  return (
    <>
      <button onClick={onClickSubmit1}>1번게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit2}>2번게시글 등록하기</button>
      <br />
      <button onClick={onClickSubmit3}>3번게시글 등록하기</button>
    </>
  );
}
