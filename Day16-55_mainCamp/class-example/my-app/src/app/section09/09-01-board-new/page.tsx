//비효율적인 코드
'use client';
export default function boardNewPage() {
  return (
    <>
      <h2>등록페이지</h2>
      제목 : <input type="text" />
      <br />
      내용 : <input type="text" />
      <br />
      <button>등록하기</button>
    </>
  );
}
