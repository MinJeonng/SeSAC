'use client';

import Box from '@/components/13-04-props-children2-ts';

export default function PropsPage() {
  return (
    <>
      {/*  컴포넌트랑 비교해서 순서를 확인해보면 어떤 로직인지 확인 가능3 */}
      <div>+++ 떡잎 유치원 +++</div>
      {/* 이 아래를 '노드' 의 타입이라고 불림 */}
      <Box school="떡잎 유치원">
        <div>
          <input type="text" />
          <button>버튼1</button>
          <div>하이</div>
        </div>
      </Box>
      <div>+++ 떡잎 유치원 +++</div>
    </>
  );
}
