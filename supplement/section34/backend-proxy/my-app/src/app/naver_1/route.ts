export function GET() {
  console.log('next server 요청');
  console.log('backend처럼(https://localhost:3000/naver_1) 사용중');

  //Next server를 백엔드처럼 사용하여 API로 브라우저에 JSON 데이터 보내기
  return new Response(JSON.stringify({ message: '요청에 성공하였습니다.' }), {
    status: 200,
  });
}
