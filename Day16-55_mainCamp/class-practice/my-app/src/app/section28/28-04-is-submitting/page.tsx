import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function IsSubmittingPage() {
  //등록하기 버튼을 여러번 눌러도 한번만 api 요청되게 해야함. 한번 누르면 disabled되게

  // ==> 이게 react-hook-form에 이미 있음
  // const {formState} = useForm()
  // formState.isSubmitting // 이거 쓰면 됌
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickSubmit = async () => {
    setIsSubmitting(true); //이 함수가 처음에 실행되면 disabled되서 한번만 등록하게 하는 것
    const result = await fetch('https://koreanjson.com/posts/10');
    const data = await result.json();
    console.log(data);
    setIsSubmitting(false); // 이때 다시 풀어주기.
  };
  // isSubmitting이 true면 disabled되게
  return (
    <button onClick={onClickSubmit} disabled={isSubmitting}>
      등록
    </button>
  );
}
