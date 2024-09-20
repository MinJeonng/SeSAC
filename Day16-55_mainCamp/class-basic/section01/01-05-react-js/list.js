const ListPage = (props) => {
  return (
    <>
      <div>youtube 목록입니다.</div>
      <div>유튜브 영상 1</div>
      <div>유튜브 영상 2</div>
      <div>유튜브 영상 3</div>
      <div>...</div>

      <span>구독자 수 : </span>
      <span>{props.subscriber}</span>
    </>
  );
};
