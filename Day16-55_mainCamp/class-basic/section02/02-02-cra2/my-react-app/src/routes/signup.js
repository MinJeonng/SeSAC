// 강의코드로 리팩토링 실습
//리팩토링 : 결과는 같은데 코드만 효율적으로 바꾼다.

import { useState } from 'react';

const Signup = () => {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);

    if (event.target.value && title && content) return setIsActive(true);
    // return은 이 조건에 충족하지 못하면 이거 실행안하고 아래있는 코드가 실행
    // -> 이런 패턴을 early-exit 패턴 이라고 함
    // 되면 여기까지인거고 안되면 넘어간다. 빠르게 !

    setIsActive(false);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (writer && event.target.value && content) return setIsActive(true);

    setIsActive(false);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);

    if (writer && title && event.target.value) return setIsActive(true);

    setIsActive(false);
  };

  const onClickSubmit = () => {
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
        disabled={isActive ? false : true}
        style={{ backgroundColor: isActive === true ? 'purple' : 'gray' }}
      >
        등록하기
      </button>
    </>
  );
};

export default Signup;
