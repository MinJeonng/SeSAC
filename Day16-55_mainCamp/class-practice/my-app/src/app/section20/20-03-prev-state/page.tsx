'use client';
import { useState } from 'react';

const Counter = () => {
  // [카운트변수, 카운트바꿔주는함수]
  const [count, setCount] = useState(0);

  const plus = () => {
    // 임시저장공간에 있는 값을 가지고 오고 싶을때 : Prev -> 이게 임시저장공간에 있는 이전 값을 가지고 있음
    // 이때 이름이 prev 아니어도 됌
    //1. 기본방법
    setCount((prev) => prev + 1);

    //함수선언식
    setCount(function (prev) {
      //로직추가가능 if()등..
      return prev + 1;
    });

    //3. 매개변수 변경가능
    setCount((num) => num + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={plus}>+</button> <br />
    </>
  );
};

export default Counter;
