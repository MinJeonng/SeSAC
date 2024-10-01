'use client';
import { useState } from 'react';

const Counter = () => {
  const result = useState(0);

  const plus = () => {
    result[1](result[0] + 1);
  };
  const minus = () => {
    result[1](result[0] - 1);
  };
  return (
    <>
      <div>{result[0]}</div>
      <button onClick={plus}>+</button> <br />
      <button onClick={minus}>-</button>
    </>
  );
};

export default Counter;
