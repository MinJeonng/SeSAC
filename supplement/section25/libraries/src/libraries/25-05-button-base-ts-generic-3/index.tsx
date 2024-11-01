'use client';

import { FieldValues, useFormContext } from 'react-hook-form';
import styles from './styles.module.css';
import { ReactNode } from 'react';

interface IButtonBaseProps {
  children: ReactNode;
  className?: string;
}
// 버튼 뼈대 만들기
function ButtonBase<T extends FieldValues>(props: IButtonBaseProps) {
  const { formState } = useFormContext<T>();
  return (
    <button className={props.className} disabled={!formState.isValid}>
      {props.children}
    </button>
  );
}

//2. 버튼 찍어내기
// 2-1. 부드러운 버튼
export function ButtonSoftMFull<T extends FieldValues>(
  props: IButtonBaseProps
) {
  return <ButtonBase<T> className={styles.button__soft__m__full} {...props} />;
}
