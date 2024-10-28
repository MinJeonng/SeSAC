'use client';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { useAccessTokenStore } from '../stores/22-01-accessToken-store';

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloHeaderSetting(props: IApolloSetting) {
  const { accessToken } = useAccessTokenStore(); //global access token
  const uploadLink = createUploadLink({
    uri: 'http://main-practice.codebootcamp.co.kr/graphql', //업로드가 가능한 uri
    headers: { Authorization: `Bearer ${accessToken}` }, // 토큰저장
  });
  console.log('현재 저장된 토큰', accessToken);
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), => accessToken이 변경되어서 리렌더 될때 새로 만들어짐 -> 그러면 캐시 삭제
    cache: GLOBAL_STATE, // 즉, state가 변해서 rerender된다고 하더라도 global이기때문에 바뀌지 않는다. + 컴포넌트는 새로 만들어져도 globalState는 유지된다.
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
