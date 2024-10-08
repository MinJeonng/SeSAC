// icon 하나만 보여주자
'use client';
import { CloseCircleOutlined, FullscreenExitOutlined } from '@ant-design/icons';

export default function LibraryIconPage() {
  // 1. 대부분의 아이콘 라이브러리들은 <span/>태그를 부모로 하여 내부에 아이콘 이미지가 자식으로 들어감
  // 그래서 그냥 e.target.value 하면 먹히지 않음
  // 2. 이미지 클릭시, 부모로 onclick 이벤트가 전파됨

  const onClickDelete = (e) => {
    alert(`${e.currentTarget.id}를 정말로 삭제합니까?`);
  };
  return (
    <>
      <FullscreenExitOutlined />
      <CloseCircleOutlined id="practice01" onClick={onClickDelete} />
    </>
  );
}
