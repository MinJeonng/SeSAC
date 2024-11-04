'use client';

import { useFormContext } from 'react-hook-form';
import styles from './styles.module.css';

// 버튼 뼈대 만들기
function ButtonBase(props) {
  const { formState } = useFormContext();
  return (
    <button className={props.className} disabled={!formState.isValid}>
      {props.children}
    </button>
  );
}

//2. 버튼 찍어내기
// 2-1. 부드러운 버튼
export function ButtonSoftMFull(props) {
  return <ButtonBase className={styles.button__soft__m__full} {...props} />;
}

// 2-2. 얇은 버튼
export function ButtonThinFitM() {
  return <ButtonBase className={styles.button__thin__fit__m} />;
}

//2-3 둥근버튼
export function ButtonRoundMM() {
  return <ButtonBase className={styles.button__circle__m__m} />;
}