'use client';
import styles from './style.module.css';
export default function CssPage() {
  return (
    <>
      <button className={styles.btnStyle}>버튼</button>
      <div className={styles.boxStyle}>네모상자</div>
    </>
  );
}
