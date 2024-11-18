'use client';

import Rsc from './02-rsc';

export default function Rcc({ children }) {
  console.log('클라이언트 컴포넌트가 렌더링');
  return (
    <>
      <div>저는 Rcc입니다.</div>
      {children}
    </>
  );
}
