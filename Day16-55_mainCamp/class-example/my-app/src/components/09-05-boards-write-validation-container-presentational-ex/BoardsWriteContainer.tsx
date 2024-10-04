//기능을 모아두는 컴포넌트
'use client';
import { useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import BoardsWriteUI from './BoardsWritePresenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardsWriteQueries';

export default function BoardsWrite(props) {
  const router = useRouter();
  const params = useParams();

  console.log('params의 넘버', params.number);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [myFunction] = useMutation(CREATE_BOARD);
  const [editBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await myFunction({
      variables: {
        myWriter: writer,
        myTitle: title,
        myContents: contents,
      },
    });
    console.log(result);
    alert('등록이 완료되었습니다.');
    router.push(
      `/section09/09-05-boards-validation-container-presentational-ex/${result.data.createBoard.number}`
    );
  };
  const onEditSubmit = async () => {
    const defaultVariables = { number: Number(params.number) };
    if (writer) defaultVariables.myWriter = writer;
    if (title) defaultVariables.myTitle = title;
    if (contents) defaultVariables.myContents = contents;

    const updateResult = await editBoard({
      variables: defaultVariables,
    });
    console.log(updateResult);
    alert('수정이 완료되었습니다.');
    router.push(
      `/section09/09-05-boards-validation-container-presentational-ex/${updateResult.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  return (
    <BoardsWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onEditSubmit={onEditSubmit}
      onClickSubmit={onClickSubmit}
      // 각 페이지에서 isEdit에 대해 넘겨준걸 여기선 그대로 받아서 또 다시 넘겨주는 것 -> props 드릴링
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
