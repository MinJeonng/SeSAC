//등록, 수정 페이지를 하나의 컴포넌트로 해서 효율적으로 만들자.
'use client';
export default function BoardWrite(props) {
  return (
    <>
      <h2>{props.isEdit ? '수정' : '등록'}페이지</h2>
      제목 : <input type="text" />
      <br />
      내용 : <input type="text" />
      <br />
      <button>{props.isEdit ? '수정' : '등록'}하기</button>
    </>
  );
}
