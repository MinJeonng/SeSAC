'use client';
import { withLoginCheck } from '@/commons/hocs/23-07-with-loginCheck-generic';
import { gql, useQuery } from '@apollo/client';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

// 로그인체크를 원래 있던 함수에다가 적용해주는 것
//로그인체크 함수가 먼저 실행되고 그다음에 LoginSuccessPage 함수가 실행되는 것
function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
}

export default withLoginCheck(LoginSuccessPage);
