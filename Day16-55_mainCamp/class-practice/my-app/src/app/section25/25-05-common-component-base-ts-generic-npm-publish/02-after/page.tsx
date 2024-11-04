'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMyUpdateType, schema } from './schema';
// import { ButtonSoftMFull } from '@/commons/ui/25-05-button-base-ts-generic-3';
// import InputSoftSFull from '@/commons/ui/25-05-input-base-ts-generic-3';
import { InputSoftSFull, ButtonSoftMFull } from 'codecamp-ui';

// 조직배포
// import { InputSoftSFull, ButtonSoftMFull } from 'smile00-ui';

export default function GraphqlMutationPage() {
  const methods = useForm<IMyUpdateType>({
    resolver: zodResolver(schema),
    // onChange 될때마다 검사해줘
    mode: 'onChange',
  });

  const onClickSubmit = async (data: IMyUpdateType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        {/* 제목(함수) :
        {InputSoftSFull<IMyUpdateType>({ type: 'text', keyname: 'title' })} */}
        제목(컴포넌트) :
        <InputSoftSFull<IMyUpdateType> type="text" keyname="title" />
        {/* 에러같은 경우도 컴포넌트로 뺄 수 있음 */}
        <p style={{ color: 'red' }}>
          {methods.formState.errors.title?.message}
        </p>
        <br />
        {/* 내용(함수) :
        {InputSoftSFull<IMyUpdateType>({ type: 'text', keyname: 'contents' })} */}
        내용(컴포넌트) :{' '}
        <InputSoftSFull<IMyUpdateType> type="text" keyname="contents" />
        <p style={{ color: 'red' }}>
          {methods.formState.errors.contents?.message}
        </p>
        <br />
        <ButtonSoftMFull<IMyUpdateType>>GraphQL-API 요청하기</ButtonSoftMFull>
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
