'use client';
import { gql, useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';

// 변수를 입력해서 하려면 타입을 지정해줘야함

const setting = gql`
  // mutation createBoard(
  //   # 타입 적는 곳
  //   $myWriter: String
  //   $myTitle: String
  //   $myContents: String
  // ) {
  //   # 전달할 변수 적는 곳
  //   createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
  //     number
  //     message
  //   }
  // }
`;

//값을 state에 넣어보자
export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [myFunction] = useMutation(setting);
  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await myFunction({
      variables: {
        //variables가 $ 역할을 하기때문에 이 안에다가 쓰면 됌
        myWriter: writer,
        myTitle: title,
        myContents: contents,
      },
    });
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    console.log(result);
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
      작성자 : <input onChange={onChangeWriter} type="text" /> <br />
      제목 : <input onChange={onChangeTitle} type="text" />
      <br />
      내용 : <input onChange={onChangeContents} type="text" />
      <br />
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </>
  );
}
