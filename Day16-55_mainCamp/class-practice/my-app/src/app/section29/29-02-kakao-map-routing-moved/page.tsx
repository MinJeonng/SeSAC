'use client';
import { useEffect } from 'react';
// window 안에 카카오가 있다는게 확실하니까
declare const window: Window & {
  kakao: any;
};

export default function KaKaoMapPage() {
  // 종속성 인수를 [] 빈배열로 하면 첨 한번만 실행

  useEffect(() => {
    // 빨리 이동하다보니 지도를 다운받을 시간이 없었던 것
    const script = document.createElement('script'); //<script></script> 가 만들어짐
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=f14853e4b0897511be60c6b560a6a900&autoload=false'; // kakao map sdk url
    document.head.appendChild(script); //<head><script></script></head> 이렇게 만든 것

    script.onload = () => {
      // script는 되었지만 map은 아직 안되어있으니까
      window.kakao.maps.load(function () {
        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <>
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e390bc19031ecc01721f1e2941715c50"
      ></script> */}
      <div id="map" style={{ width: '400px', height: '300px' }}></div>
    </>
  );
}
