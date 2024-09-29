'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloSetting(props: IApolloSetting) {
  const client = new ApolloClient({
    // 과제할땐 example이 아니라 practice로 바뀌어야함
    uri: 'http://main-example.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
