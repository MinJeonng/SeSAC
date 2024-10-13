//나만의 레이아웃 만들기
'use client';

import { usePathname } from 'next/navigation';
import Banner from './banner';
import Footer from './footer';
import Header from './header';
import Navigation from './navigation';
import { PropsWithChildren } from 'react';

// 절대 안바뀌고 한번 만들어두면 그대로 가져다 쓰게 되면 컴포넌트 바깥에다가 씀
const HIDDEN_HEADERS = [
  // 안에 있는 주소에서는 ~~한 레이아웃을 안보이게 하겠다.
  '/section11/11-04-event-bubbling-prevent-default',
  //.....
];

interface QQQ {
  children: React.ReactNode;
}

// 그냥 {children}:React.ReactNode 이게 오류였던건 children은 객체안에 children의 타입이 react.reactnode이기에 오류가 난 것
export default function LayoutComponent({ children }: QQQ) {
  const pathName = usePathname();

  console.log('pathname : ', pathName);
  // 지금 접속한 사이트가 hidden에 들어가있다면 그건 숨겨줘야할 것
  const isHiddenHeader = HIDDEN_HEADERS.includes(pathName);

  return (
    <>
      {/* 숨길 페이지가 아니면 Header 레이아웃을 보여줘 */}
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <div style={{ height: '300px', display: 'flex' }}>
        {/* <div style={{ width: '30%', backgroundColor: 'orange' }}>사이드바</div> */}
        <div style={{ width: '70%' }}>{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
}
