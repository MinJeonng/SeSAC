'use client';

export default function RestGetPage() {
  const onClickAsync = () => {
    // 백엔드꺼 get해서 들어올때 fetch
    const result = fetch('https://koreanjson.com/posts/1');
    console.log(result); //Promise{<pending>} 만 보이게됌 : 여기서 pending이 기다리는중 이라는 뜻!
  };
  const onClickSync = async () => {
    const result = await fetch('https://koreanjson.com/posts/1'); //이거 받아올때까지 기다리고 이게 끝나면 result에 담아주는 것.
    const data = await result.json();
    console.log(data); //제대로된 결과가 들어오게 됌 {title : "", ~~~~}
    console.log(data.title);
  };
  return (
    <>
      <button onClick={onClickAsync}>Rest-API(비동기) 요청하기</button> <br />
      <button onClick={onClickSync}>Rest-API(동기) 요청하기</button>
    </>
  );
}
