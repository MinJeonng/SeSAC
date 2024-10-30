// hocs는 파일명을 with를 붙이더라

'use client';
import { useEffect } from 'react';

export const withLoginCheck = (Component: any) => (props: any) => {
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      alert('로그인이 필요합니다.');
      window.location.href = '/section23/23-04-login-localStorage-hoc-check';
    }
  }, []);
  return <Component {...props} />;
};
