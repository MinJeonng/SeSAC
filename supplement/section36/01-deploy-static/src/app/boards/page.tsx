'use client';

// 정적페이지는 다이나믹 라우팅이 안되는 거임. 주소가 일정해야지만 가능함!
import { useState } from 'react';

export default function BoardPage() {
  const [state] = useState('신짱구');
  return (
    <>
      <h3>오늘은 정적페이지 배포하는중</h3>
      <p>{state}가 만들어보는 중 입니다.</p>
    </>
  );
}
