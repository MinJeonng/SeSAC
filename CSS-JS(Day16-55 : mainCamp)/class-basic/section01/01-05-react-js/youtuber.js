const YoutuberPage = (props) => {
  return (
    <>
      <div>돈냄새 채널에 오신 것을 환영합니다.</div>
      <span>{props.subscriber}</span>

      <button onClick={props.subscriberFunc}>구독</button>
    </>
  );
};
