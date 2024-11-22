'use server'; //=> 클라이언트에서 서버 쪽에서 강제로 실행시키고 싶으면 이걸 쓰면됌. 지금 클라이언트지만 이것만큼은 서버에서 강제로 실행시켜줘

//브라우저에서 그리고 api 요청같은건 next 서버를 경유해서 가자가 이거의 취지

// 이게 form의 가장 최신

import { z } from 'zod';
const schema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요' }),
  confirm: z.string().min(1, { message: '내용을 입력해주세요' }),
});

export default async function onsubmit(prevState, formDate) {
  //이걸 next서버에 전달 , 이 함수가 서버에서 하게끔 해줘야함

  //Next 서버에서 실행되고 브라우저에 아님
  console.log(formDate); //이건 터미널에서 찍히게 됌
  const title = formDate.get('title');
  const contents = formDate.get('contents');
  console.log(title, contents);

  //safeParse : 검사하는 것
  const 검사 = schema.safeParse({
    title,
    contents,
  });

  if (검사.success) {
    //등록하기
    //await 등록
  } else {
    return {
      // 이렇게 하면 일부러 에러내는것
      errors: 검사.error.flatten().fieldErrors,
    };
  }
}
