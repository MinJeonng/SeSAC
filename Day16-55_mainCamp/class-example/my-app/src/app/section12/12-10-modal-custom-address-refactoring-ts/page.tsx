'use client';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

function ModalCustom() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
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
