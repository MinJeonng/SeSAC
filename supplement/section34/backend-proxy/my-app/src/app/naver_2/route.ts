export async function GET() {
  console.log('next server 요청');
  console.log('backend처럼(https://localhost:3000/naver_1) 사용중');

  const result = await fetch('https://www.naver.com');
  const finalData = await result.text();

  //Next server를 백엔드처럼 사용하여 API로 브라우저에 JSON 데이터 보내기
  return new Response(finalData, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
  });
}

// => 이 과정을 자동화해주는 방법이 있음 : next.config.mjs
