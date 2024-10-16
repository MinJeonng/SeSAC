'use client';
import { gql, useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';

// 변수를 입력해서 하려면 타입을 지정해줘야함

const setting = gql`
  // mutation createBoard(
  //   # 타입 적는 곳
  //   $writer: String
  //   $title: String
  //   $contents: String
  // ) {
  //   # 전달할 변수 적는 곳
  //   createBoard(writer: $writer, title: $title, contents: $contents) {
  //     number
  //     message
  //   }
  // }
`;

//값을 state에 넣어보자
export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    contents: '',
  });

  const [Function] = useMutation(setting);
  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await Function({
      variables: {
        //variables가 $ 역할을 하기때문에 이 안에다가 쓰면 됌
        ...inputs,
      },
    });
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    console.log(result);
  };

  const onChangeInputs = (e) => {
    setInputs({
      // writer: inputs.writer,
      // title: inputs.title,
      // contents: inputs.contents,
      // 위에 같이 쓰는게 아니라 아래로 얕은복사를 이용해서 사용하면 됌
      ...inputs,

      // . 때문에 key인거를 모르니까 []를 이용해서 변수다! 라는걸 알려주는 것
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      작성자 : <input id="writer" onChange={onChangeInputs} type="text" />{' '}
      <br />
      제목 : <input id="title" onChange={onChangeInputs} type="text" />
      <br />
      내용 : <input id="contents" onChange={onChangeInputs} type="text" />
      <br />
      <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>
    </>
  );
}
