'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMyUpdateType, schema } from './schema';
import MyInPut from '@/commons/ui/25-01-input';
import MyButton from '@/commons/ui/25-01-button';
import { ButtonSoftMFull } from '@/commons/ui/25-03-button-base-ts-generic-1';
import InputSoftSFull from '@/commons/ui/25-03-input-base-ts-generic-1';

//1. zod 설치
//2. type을 적어주는 schema.ts를 만들어줘야함

export default function GraphqlMutationPage() {
  const methods = useForm<IMyUpdateType>({
    resolver: zodResolver(schema),
    // onChange 될때마다 검사해줘
    mode: 'onChange',
  });

  const onClickSubmit = async (data: IMyUpdateType) => {
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
  // console.log('리렌더링 되나요?');

  return (
    // 감싸지게 되면 안에 자식들이 register, formstate 등 모두 다 공유가능하다!!
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        {/* 제목 : <input type="text" {...register('title')} /> */}
        제목(함수) :
        {InputSoftSFull<IMyUpdateType>({ type: 'text', keyname: 'title' })}
        제목(컴포넌트)
        :Day16-55_mainCamp/class-practice/my-app/src/app/section25/25-03-common-component-base-ts-generic-1{' '}
        <InputSoftSFull<IMyUpdateType> type="text" keyname="title" />
        {/* 에러같은 경우도 컴포넌트로 뺄 수 있음 */}
        <p style={{ color: 'red' }}>
          {methods.formState.errors.title?.message}
        </p>
        <br />
        {/* 내용 : <input type="text" {...register('contents')} /> */}
        내용(함수) :
        {InputSoftSFull<IMyUpdateType>({ type: 'text', keyname: 'contents' })}
        내용(컴포넌트) :{' '}
        <InputSoftSFull<IMyUpdateType> type="text" keyname="contents" />
        <p style={{ color: 'red' }}>
          {methods.formState.errors.contents?.message}
        </p>
        <br />
        {/* <button disabled={!methods.formState.isValid}>
          GraphQL-API 요청하기
        </button> */}
        <ButtonSoftMFull>GraphQL-API 요청하기</ButtonSoftMFull>
      </form>
    </FormProvider>
  );
}

/**
 * <form>
 *  <button type="button"></button> 내가 onclick 추가하고 싶을때
 *  <button type = "reset"></button> form안에 있는 input 초기화하고 싶을때
 *  <button type = "submit"></button> 폼 등록/수정 등 하고싶을때 -> default값
 * </form>
 */
