export default function TtvTtiExample2Page() {
  //하이드레이션 이전에는 클릭안됌
  const onClickBtn = () => {
    alert('현재까지 TTI까지 완료');
  };
  return <button onClick={onClickBtn}>버튼을 클릭하세요(TTV)</button>;
}
