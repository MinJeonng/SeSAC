'use client';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { useAccessTokenStore } from '../stores/22-01-accessToken-store';
import { useEffect } from 'react';

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloHeaderSettingLocalStorage(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore(); //global access token

  // 아래 세개가 프리렌더링과 브라우저의 경계? 를 확인하는 예제인 것. 어디서부터 어디까지인지 확인하기위함
  //1. 프리렌더링(빨리 한번 그림을 그려보는걸 의미) 예제 - process.browser
  // if (process.browser) {
  //   console.log('나는 지금 브라우저다');
  // } else {
  //   console.log('프론트엔드 서버, yarn dev 프로그램 내부');
  // }

  //2. 프리렌더링 예제 - typeof window 방법
  // 프론트엔드 서버와 브라우저 구분하려고 넣어놓은 코드
  // if(typeof window !== 'undefined'){
  //   console.log('나는 지금 브라우저다')
  // }else{
  //   console.log('프론트엔드 서버, yarn dev 프로그램 내부')
  // }

  //3. 프리렌더링(프론트엔드서버) 무시 - useEffect 방법 (useEffect는 프리렌더링에서 그려지지않음)
  useEffect(() => {
    // 프리렌더링이 아니라 브라우저에서만 실행되게끔
    setAccessToken(localStorage.getItem('accessToken') ?? []);
  }, []);

  const uploadLink = createUploadLink({
    uri: 'http://main-practice.codebootcamp.co.kr/graphql', //업로드가 가능한 uri

    headers: {
      Authorization: `Bearer ${accessToken}`,
    }, // 토큰저장
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 즉, state가 변해서 rerender된다고 하더라도 global이기때문에 바뀌지 않는다. + 컴포넌트는 새로 만들어져도 globalState는 유지된다.
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
