'use client';

import { useLoginCheck } from '@/commons/hooks/08-06-use-login-check';

export default function CustomHookPage() {
  const { loginCheck } = useLoginCheck(); //커스텀 훅 //구조분해할당해서 함수 객체로 가지고옴

  const onClickSubmit = () => {
    //1. 로그인 검증
    loginCheck();
    //2. 결제하기
  };
  return <button onClick={onClickSubmit}>결제</button>;
}
