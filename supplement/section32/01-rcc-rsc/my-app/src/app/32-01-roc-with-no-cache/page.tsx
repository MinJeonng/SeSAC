'use client';

export default function RccWithNoCachePage() {
  const onClickButton = async () => {
    await fetch('https://koreanjson.com/posts/29');
    console.log('요청완료');
  };
  return <button onClick={onClickButton}>요청하기</button>;
}
