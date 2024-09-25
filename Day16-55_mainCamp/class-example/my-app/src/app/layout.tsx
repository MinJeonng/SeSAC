import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout(props) {
  return (
    <html lang="en">
      {/* props.컴포넌트 하면 페이지가 나옴 */}
      {/* 즉, layout.tsx는 props로 받은 컴포넌트를 감싸고 있는 것 ! */}
      <body>
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
