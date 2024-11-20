'use client';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

// 변수를 입력해서 하려면 타입을 지정해줘야함

const setting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

//값을 state에 넣어보자
export default function GraphqlMutationPage() {
  const router = useRouter();
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [myFunction] = useMutation(setting);
  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: '1234',
        },
      },
    });
    const boardId = result.data.createBoard._id;
    router.push(`/boards/${boardId}`);
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
    <>
      작성자 :{' '}
      <input role="input-writer" onChange={onChangeWriter} type="text" /> <br />
      제목 : <input role="input-title" onChange={onChangeTitle} type="text" />
      <br />
      내용 :{' '}
      <input role="input-contents" onChange={onChangeContents} type="text" />
      <br />
      <button role="submit-button" onClick={onClickSubmit}>
        GraphQL-API 요청하기
      </button>
    </>
  );
}
