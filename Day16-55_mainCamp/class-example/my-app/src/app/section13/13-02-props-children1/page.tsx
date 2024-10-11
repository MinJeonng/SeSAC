'use client';

import Box from '@/components/13-02-props-children1';

export default function PropsPage() {
  return (
    //1. children로 값 넘기기 1번째 방식 - 가능은 하지만 태그를 children으로 보내지 말라는 경고가 생김
    <>
      <div>+++ 떡잎 유치원 +++</div>
      <Box children={<button>버튼1</button>} />
      <div>+++ 떡잎 유치원 +++</div>
    </>

    //2. children 넘기기 2번째 방식
    // <>
    //   <div>떡잎유치원</div>
    //   <Box>
    //     <button>버튼2</button>
    //   </Box>
    //   <div>떡잎유치원</div>
    // </>
  );
}
