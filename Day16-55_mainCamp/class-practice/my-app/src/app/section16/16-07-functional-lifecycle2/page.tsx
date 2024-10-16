'use client';

import Link from 'next/link';
import { Component, useEffect, useState } from 'react';

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  //1. useEffect 하나로 합치기
  useEffect(() => {
    console.log('그려지고 나서 실행');
    return () => {
      console.log('사라지기전에 실행');
    };
  }, []);

  // 2. useEffect 잘못된 사용법
  //(1) 추가렌더링, (2) 무한루프
  useEffect(() => {
    // 그려지고 나서 한번 딱 실행되고 만다.
    setCount(10);
  }, []);

  // 무한루프!
  /*
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [count]);
  */

  const onClickCountUp = () => {
    setCount(count + 1);
  };
  console.log('언제?');
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리는 함수</button>
      <br />
      <Link href={'/'}>나가기</Link>
    </>
  );
}
