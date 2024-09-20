const Counter = () => {
  const [count, setCount] = React.useState(0);

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
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
};
