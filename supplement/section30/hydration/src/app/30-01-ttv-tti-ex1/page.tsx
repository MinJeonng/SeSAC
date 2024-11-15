'use client';
export default function TtvTtiExample1Page() {
  return (
    <div>
      <div>브라우저+서버 짱구</div>
      {process.browser && <div>브라우저 짱아</div>}
      {typeof window !== 'undefined' && <div>브라우저 훈이</div>}
      <div>브라우저+서버 맹구</div>
    </div>
  );
}
