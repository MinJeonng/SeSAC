'use client';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      alert('로그인이 필요합니다.');
      window.location.href = '/section22/22-03-login-localStorage-check';
    }
  }, []);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
}
