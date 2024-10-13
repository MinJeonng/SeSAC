'use client';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    // 임시저장공간에 있는 값을 가지고 오고 싶을때 : Prev -> 이게 임시저장공간에 있는 이전 값을 가지고 있음
    setCount((prev) => prev + 1); // 1
    setCount((prev) => prev + 1); // 2
    setCount((prev) => prev + 1); // 3
    setCount((prev) => prev + 1); // 4
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
