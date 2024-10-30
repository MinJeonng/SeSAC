'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schema';

//1. zod 설치
//2. type을 적어주는 schema.ts를 만들어줘야함

export default function GraphqlMutationPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    // onChange 될때마다 검사해줘
    mode: 'onChange',
  });

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
  console.log('리렌더링 되나요?');

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register('writer')} /> <br />
      <p style={{ color: 'red' }}>{formState.errors.writer?.message}</p>
      제목 : <input type="text" {...register('title')} />
      <p style={{ color: 'red' }}>{formState.errors.title?.message}</p>
      <br />
      내용 : <input type="text" {...register('contents')} />
      <p style={{ color: 'red' }}>{formState.errors.contents?.message}</p>
      <br />
      {/* 주소 : <input type="text" {...register('boardAddress.addressDetail')} /> */}
      <br />
      {/* 위의 formstate 안에 error가 없으면 active되게 할 수 있음 */}
      {/* 내가 뼈빠지게 한거 없어도 되니ㅡㄴ거....하하하하하 */}
      <button disabled={!formState.isValid}>GraphQL-API 요청하기</button>
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
