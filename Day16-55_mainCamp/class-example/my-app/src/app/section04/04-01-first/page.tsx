import Link from 'next/link';

const first = () => {
  return (
    <>
      <div>first 페이지입니다.</div>
      {/* 현재페이지에서 js태그만 바꾸기 , SPA라서 빠름 */}
      <Link href="/section04/04-01-second">second페이지로 갈게요</Link>
    </>
  );
};

export default first;
