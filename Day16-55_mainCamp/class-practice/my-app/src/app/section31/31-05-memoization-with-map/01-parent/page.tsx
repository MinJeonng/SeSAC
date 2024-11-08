'use client';

import { useState } from 'react';
import Word from '../02-child/page';
import { v4 as uuidv4 } from 'uuid';

export default function MapParentPage() {
  const [data, setData] = useState('짱아는 오늘 점심을 맛있게 먹었습니다.');

  const onclickChange = () => {
    setData('짱구는 오늘 저녁을 맛있게 먹었습니다.');
  };

  return (
    <>
      {/* 1.memo를 하게 되면 key, el이 변경된 부분만 rerendering  */}
      {/* {data.split(' ').map((el, index) => (
        <Word key={`${el}_${index}`} el={el} />
      ))} */}

      {/* memo를 하더라도 key가 바뀌면 자식이 리렌더링됌 -> 이걸 막으려면? */}

      {/* 2. memo를 해도 Key자체가 변경되므로 5개(띄어쓰기 기준)모두 리렌더링됌 */}
      {data.split(' ').map((el, index) => (
        <Word key={uuidv4()} el={el} />
      ))}

      <button onClick={onclickChange}>문장 변경하기</button>
    </>
  );
}
