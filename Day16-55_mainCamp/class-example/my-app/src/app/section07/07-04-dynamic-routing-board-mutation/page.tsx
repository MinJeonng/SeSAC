'use client';

import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

// 다이나믹은 말 그대로 페이지별로 필요한 모든 폴더를 만들지 않아도 그냥 url에서 보고싶은
// 게시물 번호 쓰면 되는 것

const CREATE_BOARD = gql`
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

export default function StaticRoutingPage() {
  const router = useRouter();
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [myFunction] = useMutation(CREATE_BOARD);
  const onClickSubmit = async () => {
    //try에 있는 내용을 시도하다가 실패하고, 그 아랫줄은 무시하고 catch문
    try {
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
      // 비동기라서 result안에 값이 들어가 있기때문에 옵셔널 안해도됌
      console.log(result.data.createBoard.number);
      alert('게시글 등록에 성공하였습니다.');
      router.push(
        `/section07/07-04-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.log(error);
    } finally {
      // 성공 하든 안하든 이것까지는 꼭 허용해줘라.
    }
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
