'use client';

import Rsc from '../components/32-03-parent-rcc-withchild-rsc';

export default function ParentRccWithChildRscPage() {
  console.log('클라이언트 컴포넌트가 렌더리디');

  //부모가 rcc이므로 자식은 rsc로 작동안됨 자식까지 모두 rcc로 작동
  return (
    <>
      <div>저는 부모입니다,</div>
      <Rsc />
    </>
  );
}
