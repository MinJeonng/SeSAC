'use client';
import styles from './style.module.css';
export default function CssPage() {
  return (
    <>
      <button className={styles.btnStyle}>버튼</button>
      <div className={styles.boxStyle}>네모상자</div>
      <div className={styles.boxStyle1}>네모3상자</div>

      {/* lg : 화면이 일정 px이상 커지면 적용되는 스타일 */}
      {/* 아래 처럼 화면상의 크기마다 간단하게 css를 줄 수 있음 */}
      <div className="lg:box sm:littleBox">클때는 초록색</div>
    </>
  );
}
