'use client';

import { memo } from 'react';

function ChildPage(props) {
  console.log('자식 컴포넌트가 렌더링 됩니다.');
  return (
    <>
      <div>============</div>
      <h2>자식컴포넌트</h2>
      <div>============</div>
    </>
  );
}
// memo 로 인해 부모컴포넌트가 렌더링되어도 자식은 rerender안되게
export default memo(ChildPage);
