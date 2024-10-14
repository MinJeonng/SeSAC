'use client';

export default function Child2({ count, plus }) {
  return (
    <>
      <div>자식2의 카운트 : {count}</div>
      <button onClick={plus}>+</button>
    </>
  );
}
