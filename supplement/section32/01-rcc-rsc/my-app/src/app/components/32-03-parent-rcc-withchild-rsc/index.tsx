//서버컴포넌트임에도 부모가 클라이언트컴포넌트여서 자식도 rsc가 되어버림
export default function Rsc() {
  console.log('??'); //브라우저에 찍힘
  return <div>저는 자식입니다.</div>;
}
