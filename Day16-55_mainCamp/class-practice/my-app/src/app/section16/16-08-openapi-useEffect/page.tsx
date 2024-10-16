'use client';

import { useEffect, useState } from 'react';

export default function RestGetPage() {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const myFunc = async () => {
      const result = await fetch('https://dog.ceo/api/breeds/image/random'); //이거 받아올때까지 기다리고 이게 끝나면 result에 담아주는 것.
      const data = await result.json();

      setImageUrl(data.message);
    };
    myFunc();
  }, []);

  return (
    <>
      <img src={imageUrl} />
    </>
  );
}
