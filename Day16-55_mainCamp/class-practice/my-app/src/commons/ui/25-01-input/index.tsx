'use client';

import { useFormContext } from 'react-hook-form';

export default function MyInPut(props) {
  // useFormContext : 부모가 내려주고 있는 것 물려받고 싶을떄 사용, props없이 뽑아서 쓸 수 있다.
  // 부모라고 하면 FormProvider
  const { register } = useFormContext();
  return <input type={props.type} {...register(props.keyname)} />;
}
