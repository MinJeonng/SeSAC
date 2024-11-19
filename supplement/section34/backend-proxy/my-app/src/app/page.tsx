'use client';
export default function Home() {
  /// 브라우저에 보여질 내용임
  const onClickWithoutScraping = async () => {
    //proxy없이 direct로 해보기
    const result = await fetch('https://www.naver.com'); //cors 에러
    const data = await result.text();
    console.log(data);
  };
  const onClickWithScraping = async () => {
    //내가 직접 만든 프록시 api
    const result = await fetch('http://localhost:3000/naver_2'); //cors 에러를 피하기 위해 백엔드 경유하기(내가 만들어놓은 엔드포인트)
    const data = await result.text();
    console.log(data);
  };
  const onClickbtn = async () => {
    //next에서 자동으로 만들어준 프록시 api
    const result = await fetch('http://localhost:3000/naver_3');
    const data = await result.text();
    console.log(data);
  };
  return (
    <>
      <button onClick={onClickWithoutScraping}>스크래핑하기(proxy없이)</button>
      <button onClick={onClickWithScraping}>스크래핑하기(proxy로)</button>
      <button onClick={onClickbtn}>스크래핑하기(자동생성해서 만든)</button>
    </>
  );
}
