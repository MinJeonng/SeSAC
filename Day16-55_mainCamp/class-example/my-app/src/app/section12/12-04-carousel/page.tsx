'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

export default function CarouselPage() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          src="/images/하쿠.jpeg"
          alt="하쿠"
          width={0}
          height={0}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          sizes="100vw"
        />{' '}
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/하쿠.jpeg"
          alt="하쿠"
          width={0}
          height={0}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          sizes="100vw"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/하쿠.jpeg"
          alt="하쿠"
          width={0}
          height={0}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          sizes="100vw"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/하쿠.jpeg"
          alt="하쿠"
          width={0}
          height={0}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          sizes="100vw"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
