'use client';

import { useCallback, useMemo, useState } from 'react';

export default function ReRenderPage() {
  console.log('컴포넌트가 렌더링 되었습니다');

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //1. 변수기억 => useMemo , 함수의 리턴값으로 내가 기억하고 싶은 값 넣어주면됌 , dependencyArray : 언제 이 친구를 다시 초기화할지.....
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  //2. 함수기억 =-> useCallback
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1); //카운트가 올라가는데 화면은 바뀌지 않음
    countLet += 1;
  }, []);

  //3. useCallback 주의사항 => state까지 기억된다.
  // state까지 기억이 되어버린다.  계속 1임
  const onClickCountState = useCallback(() => {
    console.log(countState + 1);
    setCountState(countState + 1); //화면까지 바뀐다. 해당 컴포넌트가 다시 실행됌 . 다시 실행되면서 countLet도 계속 0에서 시작
  }, []);
  //해결방안
  const onClickCountState1 = useCallback(() => {
    console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  //4. useMemo로 나만의 useCallback 만들기 => state가 저장되는 잘못된 예시이긴함 지금 이건
  const onClickCountState2 = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []);

  return (
    <>
      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState2}>카운트(state) +1 올리기</button>

      {/* 5. 로직과 ui 함께쓰기 , -> 유지보수 힘들고 복잡함 */}
      <div>카운트(state) : {countState}</div>
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) +1 올리기
      </button>
    </>
  );
}
