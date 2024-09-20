const MainPage = () => {
  // [변수명, 변수명변경해주는 기능 함수]
  const [subscriber, setSubscriber] = React.useState(0);
  const subscriberFunc = () => {
    setSubscriber(subscriber + 1);
  };

  const showListFunc = () => {
    document.getElementById('showList').style = 'display : block';
    document.getElementById('showChannel').style = 'display : none';
  };
  const showChannelFunc = () => {
    document.getElementById('showList').style = 'display : none';
    document.getElementById('showChannel').style = 'display : block';
  };
  return (
    <div>
      <div>배너화면입니다.</div> <br />
      <button onClick={showListFunc}>youtube 목록보기</button>
      <button onClick={showChannelFunc}>돈냄새 채널</button>
      <div id="showList">
        <ListPage subscriber={subscriber} />
      </div>
      <div id="showChannel">
        <YoutuberPage subscriber={subscriber} subscriberFunc={subscriberFunc} />
      </div>
    </div>
  );
};
