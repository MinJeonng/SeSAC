import { useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { CRETE_BOARD, UPDATE_BOARD } from './queries';
export const useBoardsWrite = () => {
  const router = useRouter();
  const params = useParams();

  // console.log('params의 넘버', params.number);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [myFunction] = useMutation(CRETE_BOARD);
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
      `/section09/09-06-boards-validation-hooks-refactoring/${result.data.createBoard.number}`
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
      `/section09/09-06-boards-validation-hooks-refactoring/${updateResult.data.updateBoard.number}`
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
  return {
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onEditSubmit,
  };
};
