'use client';
import { gql, useMutation } from '@apollo/client';

// 변수를 입력해서 하려면 타입을 지정해줘야함

const setting = gql`
  mutation createBoard(
    # 타입 적는 곳
    $myWriter: String
    $myTitle: String
    $myContents: String
  ) {
    # 전달할 변수 적는 곳
    createBoard(writer: $myWriter, title: $myTitle, contents: $myContents) {
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // myFunction이라는 state가 만들어짐
  //mutation은 엑셀을 바꾸는 것, 즉 등록하는 (query는 조회)
  const [myFunction] = useMutation(setting);
  const onClickSubmit = async () => {
    //여기서 그래프큐엘 요청하기
    const result = await myFunction({
      variables: {
        //variables가 $ 역할을 하기때문에 이 안에다가 쓰면 됌
        myWriter: '철수',
        myTitle: '제가말이에요',
        myContents: '조금 슬퍼요',
      },
    });
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>;
}
