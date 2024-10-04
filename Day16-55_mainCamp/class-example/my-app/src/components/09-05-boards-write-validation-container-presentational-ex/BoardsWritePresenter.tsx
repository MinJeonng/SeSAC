//화면에 보여지는 UI를 모아두는 컴포넌트
'use client';
export default function BoardsWriteUI(props) {
  return (
    <>
      작성자 :{' '}
      <input
        onChange={props.onChangeWriter}
        type="text"
        defaultValue={props.data?.fetchBoard.writer}
      />{' '}
      <br />
      제목 :{' '}
      <input
        onChange={props.onChangeTitle}
        type="text"
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :{' '}
      <input
        onChange={props.onChangeContents}
        type="text"
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <button onClick={props.isEdit ? props.onEditSubmit : props.onClickSubmit}>
        {props.isEdit ? '수정' : '등록'}하기
      </button>
    </>
  );
}
