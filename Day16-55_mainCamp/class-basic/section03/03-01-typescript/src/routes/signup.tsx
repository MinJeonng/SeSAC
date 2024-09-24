//함수 변수, 기능이 들어가있으면 ts
// jsx 값을 리턴하고 있다면 .tsx로

import { useState } from 'react';

const Signup = () => {
  const [writer, setWriter] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [isActive, setIsActive] = useState<boolean>(false);

  // 작성자 변경 핸들러 함수
  const onChangeWriter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWriter(value);

    if (value && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 제목 변경 핸들러 함수
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);

    if (writer && value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 내용 변경 핸들러 함수
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setContent(value);

    if (writer && title && value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 등록 버튼 클릭 핸들러 함수
  const onClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert('회원가입을 축하합니다.');
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContent} />
      <br />
      <button
        onClick={onClickSubmit}
        disabled={!isActive}
        style={{ backgroundColor: isActive ? 'purple' : 'gray' }}
      >
        등록하기
      </button>
    </>
  );
};

export default Signup;
