'use client';

import Link from 'next/link';
import { useEffect } from 'react';

//다운로드 된 이미지
const 유지되고있는이미지 = [];

export default function ImagePreloadPage() {
  // 이미지를 미리 받아놓고, 그 데이터가 유지되는 것이 중요하다.
  useEffect(() => {
    const img = new Image();
    img.src =
      'https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg';
    img.onload = () => {
      유지되고있는이미지.push(img);
    };
  }, []);

  return (
    <>
      <Link href={`/section31/31-15-image-preload-moved`}>페이지 이동하기</Link>
    </>
  );
}
