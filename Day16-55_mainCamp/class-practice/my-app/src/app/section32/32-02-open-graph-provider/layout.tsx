'use client';

// 이 페이지에서만 적용하고 싶은 레이아웃일 경우 이렇게 페이지마다의 layout을 설정해주면 됩니다.
export default function OpenGraphProviderLayout({ children }) {
  return (
    <>
      <meta property="og:title" content="짱구마켓" />
      <meta property="og:description" content="오픈그래프 실습 하고 있어요" />
      <meta property="og:image" content="https://placehold.co/600x400" />
      <>{children}</>
    </>
  );
}
