'use client';
import { gql, useMutation } from '@apollo/client';

const setting = gql`
  mutation {
    createBoard(writer: "짱구", title: "실습하고 있어요", contents: "어때요?") {
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
    const result = await myFunction();
    // result 안에는 number,message가 들어가서 보여지게 되는 것
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GraphQL-API 요청하기</button>;
}
