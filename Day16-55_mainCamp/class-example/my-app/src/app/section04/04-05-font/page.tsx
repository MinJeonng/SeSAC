'use client';
import styles from './styles.module.css';
export default function FontPage() {
  return (
    <>
      {/* 글로벌 폰트는 global.css에서 적용 , 지정은 css파일에서 */}
      <div>global font</div>
      <div className={styles.showFont}>local font</div>

      <div>what? global</div>
    </>
  );
}
