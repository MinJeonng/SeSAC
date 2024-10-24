'use client';
import { useCountStore } from '@/commons/stores/21-03-count-state';

export default function Child1() {
  const { count, setCount } = useCountStore();
  const onClickCountUp = () => {
    setCount(count + 1); //prev도 가능함
  };
  return (
    <>
      <div>자식1의 카운트 : {count}</div>
      <button onClick={onClickCountUp}>+</button>
    </>
  );
}
