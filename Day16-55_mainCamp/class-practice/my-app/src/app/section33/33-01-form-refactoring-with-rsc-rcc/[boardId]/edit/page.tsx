//서버 컴포넌트
// 페이지는 서버로 해놔야 자식 중에서도 서버로 할수가 잇는 것

import Form from '@/commons/ui/33-01-form-refactoring-with-rcc-rsc';
import { InputSoftSFull, ButtonSoftMFull } from 'codecamp-ui';
import { IMyUpdateType, schema } from './formSchema';
import { useInitialize } from './form.initialize';

export default function GraphqlMutationPage() {
  return (
    <Form<IMyUpdateType> schema={schema} useInitialize={useInitialize}>
      제목(컴포넌트) :
      <InputSoftSFull<IMyUpdateType> type="text" keyname="title" />
      내용(컴포넌트) :{' '}
      <InputSoftSFull<IMyUpdateType> type="text" keyname="contents" />
      <br />
      <ButtonSoftMFull<IMyUpdateType>>GraphQL-API 요청하기</ButtonSoftMFull>
    </Form>
  );
}
