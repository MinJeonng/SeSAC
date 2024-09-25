'use client'; //react 구버전 방식으로 실행해줘 ! -> 이거 없으면 useState를 못씀 . -> 신버전 방식은 추후에 배움
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    //함수의 리턴은 하나만 가능해서 빈태그 이든 큰 div이든 부모요소 하나로 묶어둬야함
    <>
      <div>{count}</div>
      <button onClick={plus}>+</button> <br />
      <button onClick={minus}>-</button>
    </>
  );
};

export default Counter;
