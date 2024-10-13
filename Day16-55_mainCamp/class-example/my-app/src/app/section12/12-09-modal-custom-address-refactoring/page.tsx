'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';

function ModalCustom() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    // 아래 보면 어차피 똑같은거니까 하나의 함수로 만들어버리면 되는 것
    // 원래는 아래 함수를 다 써서 했는데, 하나의 함수만 쓸 수 있음 -> 리팩토링 전 거 확인해보면서 뭐가 다른지 확인하기
    setIsModalOpen((prev) => !prev);
  };

  const showModal = () => {
    //setIsModalOpen(true); // 이건 prev state는 false이니까 true로 바꿔줘! 라는 뜻이니까 지금 모달은 꺼져있다는 뜻이라는거겠지.
    setIsModalOpen((prev) => !prev);
  };

  const handleOk = () => {
    // 이전거를 가지고 와서 그걸 반대로 바꾸면 모달이 켜져잇는걸 끄게 만드는거니까 부정연산자.
    setIsModalOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    console.log(data);
    // 종료가 되었을때 이 함수 실행
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>시작하기</Button>
      {/* 모달 종료 방식 - 1.modal 숨기는 방법(게시글, 이력서 등 처럼 모달을 지운다고 해도 초기화하면 안됌 */}
      {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        게시글 내용 입력 : <input type="text" />
      </Modal> */}

      {/* 모달 전체를 닫고 열때마다 초기화해서 사용할 수 있게 되는 것, false일땐 modal 아래 코드가 안그려졌다가 true일때 다시 그려지니까  */}

      {/* 모달 종료 방식 - 2. modal 삭제하는 방법(신용카드, 비밀번호 등) */}
      {isModalOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

export default ModalCustom;
