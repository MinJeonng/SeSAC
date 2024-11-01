'use client';

import { FieldValues, Path, useFormContext } from 'react-hook-form';
import styles from './styles.module.css';
import { HTMLInputTypeAttribute, useState } from 'react';

//V : 프롭스의 제너릭 타입
interface IInputBaseProps<V> {
  className?: string;
  type: HTMLInputTypeAttribute;
  //IMyUpdateType에 속하지 않으면 에러가 떠야함
  // 근데 하나만 아니라 여러개를 해야하니까 즉 다른 타임도 있을 수 있으니까 제너릭으로 지정
  keyname: Path<V>;
}

//1. 뼈대만들기

//t에선 현재 IMyUpdateType타입을 받아옴
function InputBase<T extends FieldValues>(props: IInputBaseProps<T>) {
  // 한군데에서만 쓰는게 아니라 여기저기에서 쓰일 거니까 제네릭 타입으로 지정
  // 이렇게 하게 되면 타입에 들어온 것들 이외에 들어올 수 없게 할 수 있음
  const { register } = useFormContext<T>();
  return (
    <input
      className={props.className}
      type={props.type}
      {...register(props.keyname)}
    />
  );
}

//2.인풋찍기
export default function InputSoftSFull<U extends FieldValues>(
  props: IInputBaseProps<U>
) {
  // const [] = useState<U>();
  return <InputBase<U> className={styles.input__soft_s_full} {...props} />;
}
