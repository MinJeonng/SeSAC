'use client';
export default function CheckBox() {
  const qqq2 = () => {
    alert('2번클릭');
  };
  const qqq3 = (e) => {
    // e.stopPropagation() : 3번까지만 실행하고 실행안되게 할 수 있음
    e.stopPropagation();
    alert('3번클릭');
  };
  // 컴포넌트여도 checkbox를 클릭하면 3,2,1번 클릭들이 실행됨
  return (
    <span onClick={qqq2}>
      {/* checkbox 클릭하면 자식이 먼저 클릭되고, 그 위에, 그 위에! (3-2-1)순서 */}
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
