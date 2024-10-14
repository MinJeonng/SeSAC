'use client';
import { useRouter } from 'next/navigation';

//custom 훅
export const useLoginCheck = () => {
  const router = useRouter();

  const loginCheck = () => {
    //1. 로그인 검증
    //...
    //여기서는 무조건 로그인이 실패하게 되니까 2번 알람 뜰 것

    //2. 실패 시에
    alert('로그인이 필요합니다.');
    router.push('/section08/08-07-custom-hook-login');
  };
  // 객체로 내보냄
  return {
    loginCheck,
  };
};
