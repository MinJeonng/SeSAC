'use client';

import { firebaseApp } from '@/commons/libraries/17-01-firebase';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

export default function FirebasePage() {
  const onClickSubmit = async () => {
    // 해당 firebase에서 board 컬렉션 가지고 와줘!
    const board = collection(getFirestore(firebaseApp), 'board');
    // document를 추가해주는데, 이건 객체 형태
    // 이렇게 하면 boards 컬렉션과 docs가 자동 생성됌
    await addDoc(board, {
      writer: '신형만',
      title: '오늘 대출을 다 갚았어요',
      contents: '너무 신나요!!!',
    });
  };
  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), 'board');
    // board 컬렉션에서 가지고 와줘
    const getResult = await getDocs(board);
    const showData = getResult.docs.map((el) => el.data());
    console.log('불러온 data', showData);
  };

  // Firebase 순서
  // 1. 프로젝트 만들기 2. 접속정보 복사해오기 3. firestore 데이터베이스 생성하기(직접 생성, 로컬에서 생성 모두 가능)
  //realtime firebase가 채팅관련
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
