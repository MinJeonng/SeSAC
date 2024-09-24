//함수 변수, 기능이 들어가있으면 ts
// jsx 값을 리턴하고 있다면 .tsx로

import { ChangeEvent, MouseEvent, useState } from 'react';

const Signup = () => {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [isActive, setIsActive] = useState(false);

  // 작성자 변경 핸들러 함수
  //함수에 들어오는 매개변수는 타입추론이 불가능해서 반드시 명시해줘야함!
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWriter(value);

    if (value && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 제목 변경 핸들러 함수
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);

    if (writer && value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 내용 변경 핸들러 함수
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setContent(value);

    if (writer && title && value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 등록 버튼 클릭 핸들러 함수
  // user가 마우스를 이용해서 클릭하니까! mouseEvent
  const onClickSubmit = (event: MouseEvent<HTMLButtonElement>) => {
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
