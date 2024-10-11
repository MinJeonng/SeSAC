//나만의 레이아웃 만들기
'use client';

import Banner from './banner';
import Footer from './footer';
import Header from './header';
import Navigation from './navigation';

export default function LayoutComponent({ children }) {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <div style={{ height: '300px', display: 'flex' }}>
        <div style={{ width: '30%', backgroundColor: 'orange' }}>사이드바</div>
        <div style={{ width: '70%' }}>{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
}
