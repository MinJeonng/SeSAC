import Link from 'next/link';

const second = () => {
  return (
    <>
      <div>second 페이지입니다.</div>
      <Link href="/section04/04-01-first">first로 갈게요</Link>
    </>
  );
};

export default second;
