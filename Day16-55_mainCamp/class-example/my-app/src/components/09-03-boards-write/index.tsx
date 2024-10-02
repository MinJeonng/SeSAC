//09-03의 수정, 등록 페이지들의 컴포넌트
'use client';

import { gql, useMutation } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const setting = gql`
  mutation createBoard(
    # 타입 적는 곳
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    # 전달할 변수 적는 곳
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      number
      message
    }
  }
`;
const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    updateBoard(
      number: $number
      writer: $myWriter
      title: $myTitle
      contents: $myContents
    ) {
      _id
      number
      message
    }
  }
`;

export default function BoardWrite(props) {
  const router = useRouter();
  const params = useParams();

  //중요!!!!!
  // 수정, 등록페이지를 접속하게 되면 같은 컴포넌트지만 어디 페이지에 조립되는지에 따라 params의 결과는 달라질 수 잇다.
  // 즉. props가 true가 되는 수정 페이지에서는 params.number와 true가 넘어가게 되고,  params의 넘버 486
  // false가 되는 등록페이지에서는 params.number가 undefined로 나타나게 된다!!!! params의 넘버 undefined
  console.log('params의 넘버', params.number);
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [myFunction] = useMutation(setting);
  const [editBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await myFunction({
      variables: {
        //variables가 $ 역할을 하기때문에 이 안에다가 쓰면 됌
        // 뭐등록해야할지? 밑에서 보내주는 것
        myWriter: writer,
        myTitle: title,
        myContents: contents,
      },
    });
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    console.log(result);
    alert('등록이 완료되었습니다.');
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onEditSubmit = async () => {
    const updateResult = await editBoard({
      // 그래서 뭘 수정할건데??? 즉, number를 어떻게 넘길건데? =>params를 이용해서, 맨 위에 state쪽에 설명 적어둠 읽기!!
      variables: {
        number: Number(params.number),
        myWriter: writer,
        myTitle: title,
        myContents: contents,
      },
      // refetchQueries는 뮤테이션이 성공한 후에 특정 쿼리를 다시 불러오도록 할 수 있는 기능
      // refetchQueries :[{query : }]
    });
    console.log(updateResult);
    alert('수정이 완료되었습니다.');
    router.push(
      `/section09/09-03-boards/${updateResult.data.updateBoard.number}`
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
    <>
      작성자 : <input onChange={onChangeWriter} type="text" /> <br />
      제목 : <input onChange={onChangeTitle} type="text" />
      <br />
      내용 : <input onChange={onChangeContents} type="text" />
      <br />
      <button onClick={props.isEdit ? onEditSubmit : onClickSubmit}>
        {props.isEdit ? '수정' : '등록'}하기
      </button>
    </>
  );
}
