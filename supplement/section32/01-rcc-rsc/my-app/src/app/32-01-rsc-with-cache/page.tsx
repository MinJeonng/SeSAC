//'use client' => 이걸 다시 실행하면 서버에서 한번, 브라우저에서 한번 이렇게 불필요하게 두번 실행되게 된다.
// 하이드레이션, useQuery, useEffect등이 쓰이는거 아니면 되도록 서버컴포넌트를 쓰자. 그래야 불필요한 요청이 줄어들 수 있다!

export const revalidate = 10; // 몇 초 동안 임시저장(캐시)할건지 적기, 기본값 1년(31536000초)

export default async function RscWithCachePage() {
  await fetch('https://koreanjson.com/posts/23');
  console.log('요청이 완료되었습니다.');
  return <button>요청하기</button>;
}

//그러나 서버컴포넌트가 별로 없는 것은 사실이다.
//react17이전엔 다 클라이언트였다. so, 모든 컴포넌트를 서버컴포넌트로 해야 하겠다!! 라는 강박은 없어도 된다!!!

//모든 컴포넌트를 RCC로 하면 좋지 않은 이유
/**
 * 1. 불필요한 하이드레이션 발생 => 요청이 완료되었습니다. 브라우저에서 재실행됌
 * 2. 불필요한 하이드레이션을 위한 코드 다운로드로 인한 용량 증가
 *
 */

//모든 컴포넌트를 RSC로 할 수 없는 이유
/**
 * 1. onclick, onChange, useState 등은 브라우저에서만 가능하므로
 * -> 사실상 과거 리액트17에선 모든 컴포넌트가 RCC
 */
