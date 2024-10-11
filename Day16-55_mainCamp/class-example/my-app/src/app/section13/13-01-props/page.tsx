'use client';
import Box from '@/components/13-01-props';

export default function PropsPage() {
  return (
    //1. props로 값 넘기기
    // <>
    //   <div>+++ 떡잎 유치원 +++</div>
    //   <Box apple={3} />
    //   <div>+++ 떡잎 유치원 +++</div>
    // </>

    //2. props로 JSX 넘기기
    <>
      <div>떡잎유치원</div>
      <Box apple={<button>버튼</button>} />
      <div>떡잎유치원</div>
    </>
  );
}
