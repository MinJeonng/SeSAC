'use client';

import { useFormContext } from 'react-hook-form';
import styles from './styles.module.css';

//1. 뼈대만들기
function InputBase(props) {
  // useFormContext : 부모가 내려주고 있는 것 물려받고 싶을떄 사용, props없이 뽑아서 쓸 수 있다.
  // 부모라고 하면 FormProvider
  const { register } = useFormContext();
  return (
    <input
      className={props.className}
      type={props.type}
      {...register(props.keyname)}
    />
  );
}

//2.인풋찍기
export default function InputSoftSFull(props) {
  return <InputBase className={styles.input__soft_s_full} {...props} />;
}
