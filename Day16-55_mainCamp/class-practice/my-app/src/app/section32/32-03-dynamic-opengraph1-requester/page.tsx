'use client';

//요청자관점 => 카카오톡 , 슬랙 개발자 등
export default function HtmlScrapingPage() {
  const onClickScraping = async () => {
    const productId = '67317b379712e0002973f0aa';
    const result = await fetch(
      `http://localhost:3000/section32/32-03-dynamic-opengraph2-provider/${productId}`
    );
    const data = await result.text();
    console.log(data);

    ///3. 메타태그에서 오픈그래프(og:~) 찾기
    const resultOg = data
      .split('<meta')
      .filter((el) => el.includes('property="og:'));
    console.log(resultOg);
  };
  return <button onClick={onClickScraping}>채팅입력후 엔터치기</button>;
}
