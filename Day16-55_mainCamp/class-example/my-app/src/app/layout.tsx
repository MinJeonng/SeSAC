import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// 원하는 부분은 이 폰트 지정
//100~900까지 모두 지원한다는 의미
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--부분지정폰트변수',
  weight: '100 900',
});

// 그 외는 다 이 폰트 지정
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--글로벌폰트변수',
  weight: '100 900',
});

// 여기서 description은 개발자도구에서 meta 태그에 있음, 이건 사람들이 검색하면 제목밑에 이 설명이 나오는 것
export const metadata: Metadata = {
  title: 'Next 공부중 홈페이지',
  description: '전 쫀멋 프론트 개발자가 될거에요',
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      {/* props.컴포넌트 하면 페이지가 나옴 */}
      {/* 즉, layout.tsx는 props로 받은 컴포넌트를 감싸고 있는 것 ! */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div>======여기까지는 헤더입니다/======</div>
        {props.children}
        <div>======여기까지는 푸터입니다/======</div>
      </body>
    </html>
  );
}

/*
[Next 실행순서]
1. 주소창에 주소 입력
http://localhost:3000/
2. 입력된 주소의 폴더만의 page.tsx찾기

3. 해당 페이지컴포넌트를 통째로 props에 넣어서 실행하기
-> app/tsx.tsx
=> <RootLayout children={<Home />} />
*/
