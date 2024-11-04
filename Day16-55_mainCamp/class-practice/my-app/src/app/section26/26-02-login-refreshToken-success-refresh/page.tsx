'use client';
import { withLoginCheck } from '@/commons/hocs/26-02-with-loginCheck-generic-refresh';
import { gql, useApolloClient, useLazyQuery, useQuery } from '@apollo/client';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
//1. button눌러서 api받아오기 -> 버튼 눌러서 uerQuery 실행하기
//2. 토큰만료 실패 실습 -> loginUserExample 사용하면 됌
// 아폴로 셋팅 => 1,2,3단계 추가
function LoginSuccessPage() {
  //1. 페이지 접속하면 자동으로 data에 받아지고(data는 글로벌스테이트에 저장) 리렌더링됌
  //const { data } = useQuery(FETCH_USER_LOGGED_IN);

  //2. myFunc을 실행시 data에 받아지고 글로벌 스테이트에 저장되고 리렌더링 된다.
  //const [myFunc, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  //3. fetch 처럼 사용하는 방법(결과는 글로벌 스테이트에 저장)
  // const client = useApolloClient();
  // client.query({
  //   query: FETCH_USER_LOGGED_IN,
  // });

  const client = useApolloClient();
  const onClickContact = async () => {
    // 이 곳에서 api 요청 , 5초 뒤 받아올 수 있게
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result, 'client');
  };

  return <button onClick={onClickContact}>클릭하세요</button>;
}

export default withLoginCheck(LoginSuccessPage);
