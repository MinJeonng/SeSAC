'use client';

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { useAccessTokenStore } from '../stores/22-01-accessToken-store';
import { useEffect } from 'react';
import { onError } from '@apollo/client/link/error';
import { gql, GraphQLClient } from 'graphql-request';
import { getAccessToken } from '../libraries/26-01-get-accessToken';

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloHeaderAndErrorSetting(props: IApolloSetting) {
  const { accessToken, setAccessToken } = useAccessTokenStore(); //global access token

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //1. 에러를 캐치
    if (typeof graphQLErrors !== 'undefined') {
      for (const err of graphQLErrors) {
        //1-2. 해당 에러가 토큰 만료 에러인지 확인
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          //2. 만료된거라면 refreshToken으로 accessToken 재발급 받기
          // 이때 useMutation을 사용못하니 다른 두가지 방법이 있음
          // 1. fetch, axios 등을 사용해서 restoreAccessToken 요청하기
          //2. 미니 GRAPHQL 라이브러리 설치 graphql-request
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              // return 해서 받는 시간이 있어야하고, newAccessToken을 받아왔으면 업그레이드 하고 바꿔치기

              //3. 재발급 받은 accessToken을 저장하고,  방금 실패한 쿼리의 정보 수정하고 재시도하기
              // global state에다가 새로 발급받은거 저장
              setAccessToken(newAccessToken);

              operation.setContext({
                //실패한 쿼리정보
                // getContext는 가지고 오는 것
                headers: {
                  ...operation.getContext().headers, //Authorization : Bearer 만료된 토큰, 어차피 덮어써 진다. 이전거는
                  Authorization: `Bearer  ${newAccessToken}`, //3-1. 토큰만 새거로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); //3-3. 바꿔치기된 API 재전송하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'https://main-practice.codebootcamp.co.kr/graphql', //업로드가 가능한 uri
    headers: { Authorization: `Bearer ${accessToken}` }, // 토큰저장
    credentials: 'include',
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 즉, state가 변해서 rerender된다고 하더라도 global이기때문에 바뀌지 않는다. + 컴포넌트는 새로 만들어져도 globalState는 유지된다.
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
