// hocs는 파일명을 with를 붙이더라

'use client';
import { useEffect } from 'react';

// 컴포넌트는 JSX.Element를 return 해줘야하니까.
//props는 객체니까 객체 형태로 제너릭 해줘야함 -> extends
// 객체를 다른말로 object
export const withLoginCheck =
  (Component: () => JSX.Element) =>
  <P extends object>(props: P) => {
    useEffect(() => {
      if (localStorage.getItem('accessToken') === null) {
        alert('로그인이 필요합니다.');
        window.location.href =
          '/section23/23-07-login-localStorage-hoc-check-generic';
      }
    }, []);
    return <Component {...props} />;
  };

// 어떻게 쓰는지 예시
// 이렇게 타입 추론되는 함수들은 리턴타입을 굳이 써주지 않아도 된다.
function qPgae() {
  return <div></div>;
}

// {bbb} 자리에 문자열 이런 다른게 들어가는게 아니라 객체가 들어가줘야 하는 것
withLoginCheck(qPgae)({ bbb: '하잉' });
