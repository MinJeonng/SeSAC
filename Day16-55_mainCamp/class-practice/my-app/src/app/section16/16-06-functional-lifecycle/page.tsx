'use client';

import Link from 'next/link';
import { Component, useEffect, useState } from 'react';

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(1);

  //componentDidMount 와 동일
  useEffect(() => {
    console.log('그려지고 나서 실행');
  }, []);

  //componentDidUpdate + componentDidMount 와 동일
  useEffect(() => {
    console.log('변경되고 나서 실행');
  }, []);

  // componentWilUnmount와 동일 -> clean-up function이라고 부름
  //예: 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소
  useEffect(() => {
    return () => {
      console.log('사라지기전에 실행');
    };
  }, []);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리는 함수</button>
      <br />
      <Link href={'/'}>나가기</Link>
    </>
  );
}
