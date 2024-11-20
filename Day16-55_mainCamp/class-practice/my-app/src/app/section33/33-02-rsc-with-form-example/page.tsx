'use client';

import { useFormState } from 'react-dom';
import { onsubmit } from './action';

export default function RscWithForm() {
  const [state, registerFunc] = useFormState(onsubmit);
  console.log(state); //서버에서 실행되고 브라우저 결과받기
  return (
    <form action={registerFunc}>
      제목 : <input type="text" />
      내용 : <input type="text" />
      <button>등록하기</button>
    </form>
  );
}
