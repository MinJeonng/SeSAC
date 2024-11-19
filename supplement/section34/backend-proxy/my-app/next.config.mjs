/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        // 이렇게 하면 proxy api를 하나하나 만들지 않아도 자동으로 생성된다,
        // source: 출발지, destination : 목적지
        source: '/naver_3',
        destination: 'https://www.naver.com',
      },
    ];
  },
};

export default nextConfig;
