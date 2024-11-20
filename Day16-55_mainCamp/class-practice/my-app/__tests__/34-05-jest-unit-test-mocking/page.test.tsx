import GraphqlMutationPage from '@/app/section34/34-05-jest-unit-test-mocking/page';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import fetch from 'cross-fetch';
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    // 가짜가 리턴해주는게 뭔데?
    push: jest.fn(),
  }),
}));

it('게시글 잘 등록되었는지 test하자', async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://mock.com/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  });
  render(
    // 이렇게 아폴로로 감싸주어야지만 graphql이 실행되는 것
    <ApolloProvider client={client}>
      <GraphqlMutationPage />
    </ApolloProvider>
  );
  fireEvent.change(screen.getByRole('input-writer'), {
    target: { value: '신짱구' },
  });
  fireEvent.change(screen.getByRole('input-title'), {
    target: { value: '제목입니다.' },
  });
  fireEvent.change(screen.getByRole('input-contents'), {
    target: { value: '내용입니다.' },
  });

  fireEvent.click(screen.getByRole('submit-button'));

  await waitFor(() => {
    // router가 실행됬는지 안됬는지 확인 , 가짜 useRouter를 만들어서 확인해야함
    // 등록이 . 다될때까지 기다린 다음에
    const router = useRouter();
    expect(router.push).toHaveBeenCalled(); //위에서 가짜를 만들었으므로. 실제 이동되지는 않음(실행되었는지만 확인)
  });
});
