// hocs는 파일명을 with를 붙이더라

'use client';
import { useEffect } from 'react';
import { useLoadStore } from '../stores/26-02-load-store';
import { useAccessTokenStore } from '../stores/22-01-accessToken-store';

// 컴포넌트는 JSX.Element를 return 해줘야하니까.
//props는 객체니까 객체 형태로 제너릭 해줘야함 -> extends
// 객체를 다른말로 object
export const withLoginCheck =
  (Component: () => JSX.Element) =>
  <P extends object>(props: P) => {
    const { isLoaded } = useLoadStore();
    const { accessToken } = useAccessTokenStore();

    useEffect(() => {
      if (!isLoaded) return;
      if (accessToken) return;

      alert('로그인이 필요합니다.');
      window.location.href = '/section26/26-02-login-refreshToken-refresh';
    }, [isLoaded]);
    return <Component {...props} />;
  };
