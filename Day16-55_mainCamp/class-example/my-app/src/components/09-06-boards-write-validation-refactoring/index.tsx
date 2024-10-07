//09-03의 수정, 등록 페이지들의 컴포넌트
'use client';

import { useBoardsWrite } from './hooks';

export default function BoardWrite(props) {
  // 구조분해할당해서 가지고 옴. hook에서 보낼때 객체로 보냈으니까 애도 객체로
  const {
    onChangeContents,
    onChangeTitle,
    onChangeWriter,
    onClickSubmit,
    onEditSubmit,
  } = useBoardsWrite();

  return (
    <>
      작성자 :{' '}
      <input
        onChange={onChangeWriter}
        type="text"
        defaultValue={props.data?.fetchBoard.writer}
      />{' '}
      <br />
      제목 :{' '}
      <input
        onChange={onChangeTitle}
        type="text"
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :{' '}
      <input
        onChange={onChangeContents}
        type="text"
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? onEditSubmit : onClickSubmit}>
        {props.isEdit ? '수정' : '등록'}하기
      </button>
    </>
  );
}
