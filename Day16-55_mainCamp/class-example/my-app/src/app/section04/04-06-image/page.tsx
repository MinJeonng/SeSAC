'use client';
import Image from 'next/image';
import styles from './styles.module.css';

export default function ImgPage() {
  return (
    <>
      {/* src = "/"로 시작하면 public에 접근하는 것 */}

      {/* 이미지 고정방식 */}
      <img src="/images/핑구.jpeg" alt="핑구" className={styles.showImg} />

      {/* next에서 제공해주는 image 컴포넌트
      이 태그는 직접 width, height를 적용해줘야함

      sizes는 어떤걸 기준으로 해서 보여줘! 라는 거기에 필요함

      즉 이 태그는 반드시 width, height,sizes를 써줘야함

      만약 auto를 쓰고 싶으면 각각 0으로 아래처럼 지정하고 css적용하면됌

      복잡해보이는데 쓰는 이유?? 최적화 때문!! ->
      1. 스크롤이 많아서 한참 밑에 이미지가 있으면, 
      모든 이미지를 한번에 로드할게 아니라 스크롤에 따라 이미지가 뜨게하는 , 늦게 뜨게하는 lazyload 가 들어가있음
      2. 사진 사이즈가 클 수록 로드가 느려지는데, 차라리 이럴떈 원본이 아니라 
      그보단 작은 사이즈를 보여주는게 더 나음! 화면마다 크기 다 다르니까, 모바일에는 작은사이즈 Pc에는 원본사이즈가 보여주면 더 좋으니까

    
        -> 저 다른거 사용하는거 보려면 개발자 도구 네트워크에서 확인하는거 블로깅 !

      */}

      <Image
        src="/images/하쿠.jpeg"
        alt="하쿠"
        width={0}
        height={0}
        className={styles.showImg}
        sizes="100vw"
      />
    </>
  );
}
