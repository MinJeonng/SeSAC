'use client'; //react 구버전 방식으로 실행해줘 ! -> 이거 없으면 useState를 못씀 . -> 신버전 방식은 추후에 배움
import Child1 from '@/components/14-04-lifting-state-up/Child1';
import Child2 from '@/components/14-04-lifting-state-up/Child2';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* 동시에 두개 차일드의 count가 변하는 것을 확인할 수 있음 */}
      <Child1 count={count} setCount={setCount} />
      <div>============</div>
      <Child2 count={count} plus={plus} />
    </>
  );
};

export default Counter;
