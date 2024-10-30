'use client';
import { gql, useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

// 변수를 입력해서 하려면 타입을 지정해줘야함

/*
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
*/

//값을 state에 넣어보자
export default function GraphqlMutationPage() {
  const { register, handleSubmit } = useForm();

  // const [myFunction] = useMutation(setting);
  const onClickSubmit = async (data) => {
    console.log(data);
    // const result = await myFunction({

    //   variables: {
    //     myWriter: data.writer,
    //     myTitle: data.title,
    //     myContents: data.contents,
    //   },
    // });
    // console.log(result);
  };
  console.log('리렌더링 되나요?'); // 이 친구는 리렌더링 안되는걸 확인할 수 있음, 즉 state가 바뀌고 계속 컴포넌트가 재실행되는데 비제어 방식이기에 이게 아닌 것

  //{...register('writer')} => 이렇게 하는 순간 const [writer,setWriter] = useState() 도 되는거고, onChange도 되는 것
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register('writer')} /> <br />
      제목 : <input type="text" {...register('title')} />
      <br />
      내용 : <input type="text" {...register('contents')} />
      <br />
      {/* 주소 같은 경우 객체 안에 있기때문에 이렇게 아래처럼 boardAddress 안에 ~~다 이렇게 지정해주면됌 */}
      주소 : <input type="text" {...register('boardAddress.addressDetail')} />
      <br />
      <button>GraphQL-API 요청하기</button>
    </form>
  );
}

/**
 * <form>
 *  <button type="button"></button> 내가 onclick 추가하고 싶을때
 *  <button type = "reset"></button> form안에 있는 input 초기화하고 싶을때
 *  <button type = "submit"></button> 폼 등록/수정 등 하고싶을때 -> default값
 * </form>
 */
