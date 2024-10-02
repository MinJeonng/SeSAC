//비효율적인 코드

'use client';
export default function boardEditPage() {
  return (
    <>
      <h2>수정페이지</h2>
      제목 : <input type="text" />
      <br />
      내용 : <input type="text" />
      <br />
      <button>수정하기</button>
    </>
  );
}
